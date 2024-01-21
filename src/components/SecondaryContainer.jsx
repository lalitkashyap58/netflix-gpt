import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies)
  return (
    movies&&
    
    <div className=' bg-black'>
 <div className='-mt-10 relative z-20'>
 <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"upcoming movies"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
     
 </div>
     

      {/* MovieList
             MovieList -Popular 
             MovieList  -Trending
             MOvieList  - Horror

      
      
      
      */}
      SecondaryContainer</div>
  )
}

export default SecondaryContainer;