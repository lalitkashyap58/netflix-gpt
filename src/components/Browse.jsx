import Header from './Header'

import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies copy';
import usePopularMovies from '../hooks/usePopularMovies';
const Browse = () => {

 

//this is fetching the data and storing into the slice
useNowPlayingMovies();
usePopularMovies();


  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>

      {/* 
        Main Container
          -videobackground
          -videoTitle

        Secondaty Container
          -Movie list*n
            - cards*n


       
      */}
    </div>
  )
}

export default Browse