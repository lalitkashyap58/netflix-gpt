import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSigninForm, setSigninForm] = useState(true);

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
      <form className="w-1/3 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-60">
        <h1 className="font-bold text-white text-3xl py-4">
          {isSigninForm ? "Sign in" : "Sign up"}
        </h1>
        <input
          type="text "
          placeholder="email address"
          className="p-2 m-2 w-full bg-gray-700"
        ></input>
        {isSigninForm &&(
 <input type="text" placeholder="UserName" className="p-2 m-2 w-full bg-gray-700">
 </input>
        )

        }
       
        <input
          type="password "
          placeholder="Password"
          className="p-2 m-2  w-full bg-gray-700"
        ></input>
        <button className=" p-2 m-2 w-9/10 mt-10  bg-red-700 h-1/5 w-full rounded-lg">
          {isSigninForm ? "Sign in " : "Sign up"}
        </button>
        <p
          className="font-bold text-white py-4 cursor-pointer"
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
