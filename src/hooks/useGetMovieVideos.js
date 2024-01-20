import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";


const useGetMovieVideos=({movieId})=>{
  
    const dispatch = useDispatch();
      //fetch the trailer video and updating the trailerVideoData
    
    const getMovieVideos = async () => {
      const data = await fetch(
    "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    };
    
    useEffect(() => {
      getMovieVideos();
    }, []);
}
export default useGetMovieVideos;