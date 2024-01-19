import useGetMovieVideos from "../hooks/useGetMovieVideos";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
    useGetMovieVideos({movieId});
    const trailerVideo=useSelector((store)=>store.movies?.trailerVideo);

  // return
  return (
    <div className="w-full">
        {trailerVideo?<iframe className="w-full aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo.key+"?&autoplay=1&mute=1"}
        title="How to Get Ahead of 99% College Students in 2024"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>:<h1>wait </h1>}
     
    </div>
  );
};

export default VideoBackground;
