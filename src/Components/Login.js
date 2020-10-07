import "../CSS/Login.css";
import React from "react";

import logo from "../Images/mechabook-logo.png";
import logoTitle from "../Images/mechabook-title.png";

import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase.js";
import { actionTypes } from "../Context API/reducer.js";
import { useStateValue } from "../Context API/StateProvider.js";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: {
            displayName: result.user.displayName,
            email: result.user.email,
            photoURL: result.user.photoURL,
            uid: result.user.uid,
          },
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo} alt="" />
        <img src={logoTitle} alt="" />
      </div>

      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
