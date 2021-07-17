import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "../../util/firebase";
import { useStateValue } from "../../util/StateProvider";
import Checkout from "../checkout-module/Checkout.js";
import Header from "../header-module/Header.js";
import Home from "../home-module/Home.js";
import Login from "../login-module/Login.js";
import "./App.css";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will run only once the App component is loaded
    auth.onAuthStateChanged((authUser) => {
      console.log("user is : " + authUser.email);
      if (authUser) {
        //the user just logged in or user already looged in.
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
