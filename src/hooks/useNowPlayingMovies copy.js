  import { useDispatch, useSelector } from "react-redux";
  import { addNowPlayingMovies } from "../utils/movieSlice";
  import { useEffect } from "react";
  import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies=()=>{
  //fetch data from the TMDB Api and update the store
  const dispatch=useDispatch();
  const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies);
  const getNowPlayingMovies=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS);

    const json=await data.json();
    dispatch(addNowPlayingMovies(json.results));
    
  };

  useEffect(()=>{
    if(!nowPlayingMovies)
    getNowPlayingMovies();
  },[]);
};
export default useNowPlayingMovies;
  
