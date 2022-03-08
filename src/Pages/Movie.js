import Moviecontent from "../Components/Moviecontent";
import {movieType} from '../Apis/tmdbApi';
import {Swiper} from 'swiper/react'
import Mainslider from '../Components/Mainslider'
function Movie() {
    // tmdbApi
    

    
  
    return(
        <>
        <Mainslider type = {movieType.popular} />
        <Moviecontent title = {'Latest & Trending'}  type = {movieType.upcoming}  />
        <Moviecontent title = {'Popular shows'}      type = {movieType.popular}  />
        <Moviecontent title = {'Latest & Trending'}  type = {movieType.top_rated}  />

        </>
    )
}

export default Movie
