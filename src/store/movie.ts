import { Store } from '../core/heropy'
const { APIKEY } = process.env
export interface SimpleMovie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}
interface DetailedMovie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: {
    Source: string
    Value: string
  }[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}
interface State {
  searchText: string
  page: number
  pageMax: number
  movies: SimpleMovie[]
  movie: DetailedMovie
  message: string
  loading: boolean
}
const store = new Store<State>({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {} as DetailedMovie,
  loading: false,
  message: 'Search for the movie title!'
})

export default store
export const searchMovies = async (page: number) => {
  store.state.loading = true
  store.state.page = page
  if (page === 1) {
    store.state.movies = []
    store.state.message = ''
  }
  try {
    const res = await fetch(`https://omdbapi.com?apikey=${APIKEY}&s=${store.state.searchText}&page=${page}`)
    const { Response, Search, totalResults, Error } = await res.json()
    if (Response === 'True') {
      store.state.movies = [
        ...store.state.movies,
        ...Search
      ]
      store.state.pageMax = Math.ceil(Number(totalResults) / 10)
    } else {
      store.state.message = Error
      store.state.pageMax = 1
    }
  } catch (error) {
    console.log('searchMovies error:', error)
  } finally {
    store.state.loading = false
  }
}
export const getMovieDetails = async (id:string) => {
  try {
      const res = await fetch(`https://omdbapi.com?apikey=${APIKEY}&i=${id}&plot=full`)
      store.state.movie = await res.json()
  } catch (error) {
      console.log('getMovieDetails error:', error)
  }
}