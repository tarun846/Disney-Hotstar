import React from 'react'
import Tvcontent from  '../Components/Tvcontent'
import Mainslider from '../Components/Mainslider'
import {tvType} from '../Apis/tmdbApi';
function Tv() {
    return (
        <div>
            <Mainslider type = {tvType.top_rated} />
            <Tvcontent  title = {'Top Picks for you'} type = {tvType.popular} />
            <Tvcontent title = {'Popular Shows'} type = {tvType.top_rated} />
            <Tvcontent title = {'New on Disney+hotstar'} type = {tvType.on_the_air} />
        </div>
    )
}

export default Tv
