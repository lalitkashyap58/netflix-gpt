import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Body = () => {
    const dispatch=useDispatch();
    //for the navigation

    const appRouter = createBrowserRouter([{ path: "/", element: <Login /> },
   {
    path:"/browse",
    element:<Browse/>
   },
  
]);
useEffect(()=>{

    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {

    const {uid,email,displayName,photoURL} = user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
    // ... 
  } else {
    // user removed from the system
    dispatch(removeUser());
     //navigate to the main page 
  }
});

},[])


    return (
        <div>
           <RouterProvider router={appRouter}>

           </RouterProvider>
        </div>
    );
};

export default Body;
