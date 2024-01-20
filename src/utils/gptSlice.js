import { createSlice } from "@reduxjs/toolkit";
const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieNames:null,
        movieResults:null
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch;

        },
        addGptMovieResult:(state,action)=>{
            const {movieNames, movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        },
        clearGptMovieResults:(state)=>{
            state.movieNames=null;
            state.movieResults=null;
        }
    } 
});
export const{toggleGptSearchView,addGptMovieResult,clearGptMovieResults}=gptSlice.actions;
export default gptSlice.reducer;

