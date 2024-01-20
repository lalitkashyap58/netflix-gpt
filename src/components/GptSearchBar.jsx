import React, { useEffect } from 'react'
import "./my.css";
import language from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import openAi from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import {addGptMovieResult} from "../utils/gptSlice";
import { Watch } from 'react-loader-spinner';

const GptSearchBar = () => {
  const dispatch=useDispatch();
   const searchText=useRef(null);

  const langKey=useSelector(store=>store.config.lang);

  //movie search from TMDB API
  const searchMovieTMDB=async(movie)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
    const json= await data.json();

    console.log(json);
    return json.results;
   

  }

  //onclicking search button
  const handleGptSearchClick=async ()=>{
   

    //make an api call to get api and get movie results
     
    const gptQuery="Act as a Movie recommendation System and suggest some movies for the query  "+ searchText.current.value+". only give me names of 8 movies , comma seperated like the exapmple result given ahead . Example ,Result : Gadar , Sholay , Don , Golmaal , Koi mil gaya";
    const gptResults=await openAi.chat.completions.create({
      messages:[{role:"user",content:gptQuery}],
      model:"gpt-3.5-turbo",
    });

    if(!gptResults.choices)
    {
      <Watch
      visible={true}
      height="80"
      width="80"
      radius="48"
      color="#4fa94d"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
    }

    console.log(gptResults.choices?.[0]?.message?.content);
   
    // contains movie names suggested by openAi.
    const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");
   console.log(gptMovies)


  //  for each movie I will search movie from TMDB API (Search API)
    
    const promiseArray=gptMovies.map(movie=>searchMovieTMDB(movie));
    
    const tmdbResults= await Promise.all(promiseArray);
    
    //check if all promises resolved successfully
    console.log(tmdbResults);
    console.log(gptMovies);
    
    
    dispatch(addGptMovieResult(    {movieNames:gptMovies,movieResults:tmdbResults}
      ));


     

   
  }
  return (
    <div className='relative pt-[8%] flex justify-center'>
        <form className=' w-1/2 flex align-center justify-center bg-black' onSubmit={(e)=>e.preventDefault()}>
       
        <input  ref={searchText}className=' w-3/4 p-4 m-4 ' type='text ' placeholder={language[langKey].gptSearchPlaceholder}></input>
       
        <button className='btn text-white h-[50%] mt-6 px-[10%] font-mono'  onClick={()=>handleGptSearchClick()} > {language[langKey].search}</button>
         
        
        </form>
    </div>
  )
}

export default GptSearchBar;