import { Store } from "../core/heropy";

interface State{
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}
export default new Store<State>({
  photo: 'https://heropy.blog/css/images/logo.png',
  name: '양재혁',
  email: 'gndksakxk10@naver.com',
  blog: 'https://velog.io/@yangjaehyuk',
  github: 'https://github.com/yangjaehyuk',
  repository: 'https://github.com/yangjaehyuk/vanillajs-movie-app'
})