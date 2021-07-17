import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../util/firebase";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) history.push("/");
      })
      .catch((error) => alert(error));
  };

  var register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://indianapublicmedia.org/images/news-images/amazon-logo.jpg"
          alt="amazon logo"
          className="login__image"
        />
      </Link>
      <div className="login__container">
        <h2 className="login__signIn">Sign-In</h2>
        <form className="login__form">
          <label htmlFor="email">Email or mobile phone number</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login__emailId"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login__password"
          />
          <small className="login__rememberMe">
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            Keep me signed <in className=""></in>
          </small>
          <br></br>
          <button
            className="login__signIn button"
            type="submit"
            onClick={signIn}
          >
            Sign-In
          </button>
        </form>
        <small className="login__terms">
          By signing in, you agree to <b>Clone Amazon's</b> Conditions of Use
          and Privacy Notice.
        </small>
        <button className="login_register button" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
