import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { TypeAnimation } from 'react-type-animation';


const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  return (
    <div className="h-full bg-black">
      <div className="flex justify-center align-center relative mt-[7%]  ">
        <div className="p-4 top-[30%] w-4/5 h-fit bg-black absolute bg-opacity-80 text-white font-mono">
          {!movieNames ? (
            <div className="flex justify-center">
              <TypeAnimation
                 sequence={[
        // Same substring at the start will only be typed out once, initially
        'Type your Mood here',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Type your thoughts here',
        1000,
        'Type your Love? Anger? Sadness? 🤣 , we have everything'
        
      ]}
      wrapper="span"
      speed={25}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
          
            </div>
          ) : (
            movieNames.map((movieName, index) => (
              <MovieList
                key={movieName} 
                title={movieName}
                movies={movieResults[index]}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
