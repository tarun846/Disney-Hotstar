import React , {useEffect,useState} from 'react'
import tmdbApi , {movieType} from '../Apis/tmdbApi';
import apiConfig from '../Apis/apiConfig';
import {Swiper,SwiperSlide} from 'swiper/react'
import  SwiperCore from 'swiper'
import 'swiper/swiper-bundle.css'

function Tvcontent({title,type}) {
    const [MovieItems, setMovieItems] = useState([])
    const params = {page: 1}
        
    useEffect(() => {
        const getMovies = async () => {
            const params = {page: 1}
            try {
                const response = await tmdbApi.getTvList(type, {params});
                setMovieItems(response.results);
                console.log(response);
            } catch {
                console.log('error');
            }
        }
        getMovies();
    }, []);
    return (
        <div  className ='contetnt' >
        <h3> {title} </h3>
        <div className = 'sahi' >
        <Swiper
         breakpoints={{
           
            390: {
                slidesPerView : 2,
                spaceBetween: 20,
                   },
                   480: {
                    slidesPerView : 3,
                      spaceBetween: 20,
                       },

                       590 : {
                        slidesPerView : 3.5,
                        spaceBetween: 20,
                       },
                       690: {
                        slidesPerView : 4,
                        spaceBetween: 20,
                           },
                           790: {
                            slidesPerView : 4.5,
                            spaceBetween: 20,
                               },
                    890 : {
                        slidesPerView : 5.5,
                        spaceBetween: 20,
                           },
             1190 : {
                 slidesPerView : 7,
                 spaceBetween : 0,
             }
          
          }}
        >
           {MovieItems.map((item,i) =>{
               const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);
               console.log(item);
               let bini = item.overview;
               if(bini.length > 50) {
                   bini = 'om sahi ram'
               }else{
                   return bini
               }
            
               return (
                    <>
                <SwiperSlide key = {`slide-${i}`} >
                    <div style = {{position:'relative'}} >
                    <img src ={background}  />
                    
                    <div className = 'image__overlay'>
                    <div> {item.name} </div> 
                     <div className = 'image__description' > 
                        <p> {bini} </p>
                        </div>   
                        <div className ='gradient' >

                        </div>
                      </div>
                    </div>
                    </SwiperSlide>
                    </>
               )
              
           })}
            </Swiper>
  </div>
  </div>
    
    )
}

export default Tvcontent
