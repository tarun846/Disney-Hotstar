import React, { useState, useEffect, useRef } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import {movieType} from '../Apis/tmdbApi';
import tmdbApi from '../Apis/tmdbApi';
import apiConfig from '../Apis/apiConfig';
SwiperCore.use([Autoplay]);

function Mainslider({type}) {
    
    const [MovieItems, setMovieItems] = useState([])
    const params = {page: 2}
        
     useEffect(() => {
        const getMovies = async () => {
            const params = {page: 1}
            try {
                const response = await tmdbApi.getMoviesList(type, {params});
                setMovieItems(response.results.slice(0, 4));
                 console.log(MovieItems);
            } catch {
                console.log('error');
            }
            return () => {
                setMovieItems([])
            }
        }
        getMovies();
    }, []);
   
 
    return (
           
                
           <Swiper
           modules={[Autoplay]}
           grabCursor={true}
           spaceBetween={0}
           slidesPerView={1}
           autoplay={{delay: 3000}}
           >
            {MovieItems.map((item,i)=>{
const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);
             
         return(
            <SwiperSlide key = {`slide-${i}`} >

     
         <>
   <div className = 'slider_element' >
   <div className = 'Main_slide' style = {{ backgroundImage : `url(${background})`  }}  >
     <div className = 'slider_text' >
     <h1>   {item.title} </h1>
     {/* <p> {item.overview} </p> */}
     </div>
   </div>
 
   </div>
         </>
         </SwiperSlide> 
         )


            })}
            </Swiper>   
      
       
    )
}

export default Mainslider
