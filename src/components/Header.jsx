import React, { useEffect } from "react";
import {  getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { removeUser } from "../utils/userSlice";
import { addUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // console.log(user);
  const auth = getAuth();
  const dispatch=useDispatch();

//checking if the user is logged in than take set the store and take him to the browsw page
useEffect(() => {
  const auth = getAuth();
  const unsubscribe=onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName, photoURL } = user;
      dispatch(
        addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        })
      );
      navigate("/browse")
      // ...
    } else {
      // user removed from the system
      dispatch(removeUser());
      navigate("/")
      //navigate to the main page
    }
  });
  //unsubscribe when the component will unMount.
  return ()=>unsubscribe();
  
}, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="  flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44 h-auto "
        src={LOGO}
        alt="logo"
      ></img>

      {user && (
        <div className=" flex p-2">
          <img
            className=" w-12 h-12  "
            alt="usericon"
            src={user.photoURL}
          ></img>
          <button
            onClick={() => {
              handleSignOut();
            }}
            className="font-bold text-white"
          >
            (Signout)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
