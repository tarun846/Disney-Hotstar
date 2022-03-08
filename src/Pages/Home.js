import React from 'react'
import Mainslider from '../Components/Mainslider'
import Tvcontent from  '../Components/Tvcontent'
import {movieType,tvType} from '../Apis/tmdbApi';
import { Link } from 'react-router-dom';
import Moviecontent from '../Components/Moviecontent';

function Home() {
    return (
        <div>
            <Mainslider type = {movieType.popular} />
           <div>
           <Link to = '/Movie' >
           <Moviecontent title = {'Latest & Trending'}  type = {movieType.upcoming}  />
           </Link>
           <Link to = '/Tv' >
           <Tvcontent title = {'Popular Shows'} type = {tvType.top_rated} />
           </Link>
           <Link to = '/Movie' >
           <Moviecontent title = {'Latest & Trending'}  type = {movieType.upcoming}  />
           </Link>
           </div>
        </div>
    )
}

export default Home
