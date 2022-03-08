import React , {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import apiConfig from '../Apis/apiConfig';
import tmdbApi  from '../Apis/tmdbApi';
import Video from '../Components/Video';
function MovieDetails() {
    const [MovieItems, setMovieItems] = useState([])
    const [VideoItems, setVideoItems] = useState([])
    
    const bini = useParams();

      console.log(bini.category)
    useEffect(() => {
        const getMovies = async () => {
            const params = {page: 1}
            try {
                const response = await tmdbApi.detail(bini.category, bini.imdbId, {params});
                const response1 = await tmdbApi.getVideos(bini.category, bini.imdbId);
                console.log(response1);
                console.log(response);
                setMovieItems(response);
                setVideoItems(response1.results)
                 console.log(response1.results,'sahi');
               console.log(VideoItems);
            } catch (error) {
                console.error(error);
            }
            // return () => {
            //     setMovieItems([])
            // }
        }
        getMovies()
    }, []);

    const background = apiConfig.originalImage(MovieItems.backdrop_path ? MovieItems.backdrop_path : MovieItems.poster_path);
      
    return (
        <>
        <div className = 'Details' style = {{ backgroundImage : `url(${background})` }} >
          <div className = 'Details_content' >
          <h1> {MovieItems.title} </h1>
           <h3> {MovieItems.overview} </h3>
          </div>
        </div>
           <div className = 'Details_extra' >
           <h1> Trailers & Extras </h1>
           <div className = 'Details_video' >
            {VideoItems.map((e,i) => {
                console.log(e);
           return    <Video data = {e} key = {i} />
            })}
           </div>
           </div>
        </>
    )
}

export default MovieDetails
