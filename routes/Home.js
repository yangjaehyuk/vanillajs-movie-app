import { Component } from "../src/core/heropy";
import Headline from "../src/components/Headline";
import Search from "../src/components/Search";
import MovieList from "../src/components/MovieList";
import MovieListMore from "../src/components/MovieListMore";


export default class Home extends Component {
  render() {
    const headline = new Headline().el
    const search = new Search().el
    const movieList = new MovieList().el
    const movieListMore = new MovieListMore().el
    this.el.classList.add('container')
    this.el.append(
      headline, search, movieList, movieListMore
    )
  }
}