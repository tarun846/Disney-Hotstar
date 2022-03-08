import React from 'react';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import MovieDetails from './Pages/MovieDetails';
import TvDetails from './Pages/TvDetails';
import Tv from './Pages/Tv';
import Movie from './Pages/Movie';
import Home from './Pages/Home';

function App() {
    return (
        <>
        Jay jagannath 
        <div>
        <Router>
            <Navbar/>
            
            <Routes>
            <Route path = '/' element = {<Home/>}  />
            <Route path = '/Movie'  element = {<Movie/>}  />
            <Route path = '/Tv'  element = {<Tv/>} />
            <Route path = '/movie/:category/:imdbId'  element = {<MovieDetails/>}  />
            <Route path = '/details/:imdbId'  element = {<TvDetails/>}  />

            {/* <Route path = '*' > 404 NOT FOUND </Route> */}
            </Routes>
          
            </Router>
            
        </div>
        </>

    )
}

export default App
