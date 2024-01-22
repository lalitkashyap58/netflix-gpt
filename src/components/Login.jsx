import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import checkValidData from "../utils/validation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSigninForm, setSigninForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleButtonClick = () => {
    //validate the form data
    const message = checkValidData(email.current.value, password.current.value);
  
    if (message) return;

    //signin or sign up logic
  
    if (!isSigninForm) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://www.clipartmax.com/png/small/118-1185030_shin-chan.png",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //signin Logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
         
        
          // ...
        })
        .catch((error) => {        });
    }
    setErrorMessage(message);
  };
  const toggleSigninForm = () => {
    setSigninForm(!isSigninForm);
  };
  return (
    <div>
       <div className="absolute -z-1">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg"
          alt="login-background"
        />
      </div>
      <Header />
     
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/3 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-60 h-4/5"
      >
        <h1 className="font-bold   text-white text-4xl py-4">
          {isSigninForm ? "Sign in" : "Sign up"}
        </h1>
        <input
          ref={email}
          type="text "
          placeholder="email address"
          className="p-2 m-2 w-full bg-gray-700"
        ></input>
        {!isSigninForm && (
          <input
            ref={name}
            type="text"
            placeholder="UserName"
            className="p-2 m-2 w-full bg-gray-700"
          ></input>
        )}

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2  w-full bg-gray-700"
        ></input>
        <p className="text-red-70 rounded-md">{errorMessage}</p>
        <button
          className=" p-2 m-2 w-9/10 mt-10  bg-red-700  w-full rounded-lg"
          onClick={() => {
            handleButtonClick();
          }}
        >
          {isSigninForm ? "Sign in " : "Sign up"}
        </button>
        <p
          className="font-bold ml-2 text-red py-4 cursor-pointer"
          onClick={() => {
            toggleSigninForm();
          }}
        >
          {!isSigninForm
            ? "Already a registered User? Sign in Now "
            : "New to Netflix ? Sign up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
