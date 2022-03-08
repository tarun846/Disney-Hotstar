// import React , {useEffect,useState} from 'react'
// import tmdbApi , {movieType} from '../Apis/tmbd';
// import SwiperCore, { Autoplay } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import apiConfig from '../Apis/apiConfig';
// import 'swiper/swiper-bundle.css'
// function HeroSlider() {
//     const [Movie, setMovie] = useState([])
//     SwiperCore.use([Autoplay])
//   useEffect(() => {
//     async function getMovies() {
//       const params = {page : 1}
//       try {
//           const response =  await tmdbApi.getMoviesList(movieType.popular,{params})
//           setMovie(response.results.slice(0,4));
        
//         } catch (error) {
//           console.log(error);
//       }    
//     }
//    getMovies()
// }, [])
//     console.log(Movie);
//     return (
  
//             <>
//         <Swiper
//       modules={[Autoplay]}
//       grabCursor={true}
//       spaceBetween={0}
//       slidesPerView={1}
//       // autoplay ={{delay : 1000}}
    
//         >
//             {Movie.map((item ,i) => (
//  <SwiperSlide key = {i} >
//     < HeroContent  item = {item}  />
//        {/* <img  src = {apiConfig.originalImage(item.backdrop_path)} /> */}
  
//  </SwiperSlide>

//             ))}

//         </Swiper>
//         </>
//     )
// }

// export default HeroSlider



//  function HeroContent({item}) {
//     const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);
//     return (
//         <div className = 'hero_slider'   >
//              <div className ='hero_slider_content'  style = {{backgroundImage: `url(${background})`}}>
//      <div className ='data_container' >

        
//         <h3> {item.title}  </h3>
        
//   <h2>  {item.original_language  } </h2>
//         <h2> {item.overview} </h2>
//         <h5>  {item.release_date} </h5>
//      </div>
//             </div>
//         </div>
//     )
// }

 
