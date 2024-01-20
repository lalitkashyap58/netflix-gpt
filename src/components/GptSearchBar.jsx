import React from 'react'
import "./my.css";
import language from '../utils/languageConstants';
import { useSelector } from 'react-redux';


const GptSearchBar = () => {
  const langKey=useSelector(store=>store.config.lang);
  console.log(langKey);
  return (
    <div className='relative pt-[8%] flex justify-center'>
        <form className=' w-1/2 flex align-center justify-center bg-black'>
       
        <input className=' w-3/4 p-4 m-4 ' type='text ' placeholder={language[langKey].gptSearchPlaceholder}></input>
       
        <button className='btn text-white h-[50%] mt-6 px-[10%] font-mono'  > {language[langKey].search}</button>
         
        
        </form>
    </div>
  )
}

export default GptSearchBar