import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_CDN_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <div> 
        <div className="absolute">
        <img
          src={BG_CDN_URL}
          alt="login-background"
        />
         <img
          src={BG_CDN_URL}
          alt="login-background"
        />
         <img
          src={BG_CDN_URL}
          alt="login-background"
        />
         <img
          src={BG_CDN_URL}
          alt="login-background"
        />
         <img
          src={BG_CDN_URL}
          alt="login-background"
        />
      </div>
  
      
      <GptSearchBar/>
      <GptMovieSuggestions/>

      


    </div>
  )
}

export default GptSearch