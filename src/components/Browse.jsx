import Header from './Header'

import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies copy';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

 
const showGptSearch=useSelector(store=>store.gpt.showGptSearch);

//this is fetching the data and storing into the slice
useNowPlayingMovies();
usePopularMovies();


  return (
    <div>
      <Header/>
      {showGptSearch?
      
      
      <GptSearch/>:<>
      
      <MainContainer/>
      <SecondaryContainer/>
      </>
}

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