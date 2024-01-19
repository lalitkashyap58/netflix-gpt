import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import checkValidData from "../utils/validation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSigninForm, setSigninForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleButtonClick = () => {
    //validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(message);
    if (message) return;

    //signin or sign up logic
    console.log(isSigninForm);
    if (!isSigninForm) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          console.log("signup ke andar gaya");
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://media.licdn.com/dms/image/D4D03AQHY7ljM2kACHA/profile-displayphoto-shrink_400_400/0/1702287968351?e=1710979200&v=beta&t=avg8wqyZwRz_FhhS7i3VGrwyofmbN9vWY8xBxu-9zu0",
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

          console.log(user);
          // ...
        })
        .catch((error) => {
          console.log("nhi chal rha");
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
          console.log("chal rha hai");
          const user = userCredential.user;
         
        
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
    setErrorMessage(message);
    console.log(message);
  };
  const toggleSigninForm = () => {
    setSigninForm(!isSigninForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg"
          alt="login-background"
        />
      </div>
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
          {isSigninForm
            ? "Already a registered User? Sign in Now "
            : "New to Netflix ? Sign up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
