# Netflix gpt 
  --we set up the project using npx create react app
  -- we can use formik for forms it helps alot .
  -- Instead of using formki we are doing  form    validation from scratch.
  --Firebase Setup
  --Implement Sign in use Api
  --Created Redux Store

  New Concept Learnt in building that project ::
    --useref => used for referrence for the input , we also can use useState here.


 # Redux toolkit:
  # slice 
  1) make a variable for storing slice
  2) now you have to give the name.
  3) initial State 
  4) reducers functions
   # dispatch and store the data into the slice
  Now you have to dispatch an action
  1) you have to import useDispatch from react-redux.
  2) now use dispatch("your action name  (the reducer function you used in the slice)").
  # now using selector , we can get the data from the store
   1) useSelector and get the data 

  # you can fetch api and store the data using custom hooks it makes code looks cleaner and easy to maintain.


  # Now for playing videos from TMDB API which consititutes of the keys and the trailer are taken fron the youtube so we needed embed code of the youtube.


  # for stroing the gptsearch option we are again using redux.
 
  # we can use useRef() whenever we give input and we can also have other ways of doing this.
  

---- we are finding  the movies recommended by gpt----
  # making api call from search api of tmdb
  # we are taking 5 movies from recommendation
  # but we are making 5 calls immediately by using map function 
  # than it will the search function will give us promises , it will take time to resolve the promises
  ------so there is a function called promise.all()=====> promise.all will finish when all promises get resolved.


  # in gptSearchBar when I store gptSlice , we learnt this method how we can dispatch  an object 

  
# Memoisation - Every time my component loads the hook is called , but when my data is already there we don't need to call the api again and again , that's where the concept of memoisation came in .
   
# how to reduce the api bill .
   


  # Features
    -Login/Signup 
         -Signin/ Sign up Form
         -redirect to Browse Page 

    -Browse (after authentication)
       -Header
       -Main Movie
            -Trailer in Background
            -Title & Description
            -Movie suggestion
                -MovieLists

    -NeflixGpt
         -SearchBar
         -Movie Suggestion

    -MultiLanguage Feature - languagecomponent
                           - constants file
                           - into redux
                                
   


# Planning for the UI

   Main Container
          -videobackground
          -videoTitle

        Secondaty Container
          -Movie list*n
            - cards*n

# creating multilanguage options-> using option and putting array into constants.
    -- we are using this into our header.