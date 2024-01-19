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
   


# Planning for the UI

   Main Container
          -videobackground
          -videoTitle

        Secondaty Container
          -Movie list*n
            - cards*n