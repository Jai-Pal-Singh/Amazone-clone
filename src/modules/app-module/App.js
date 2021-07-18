import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "../../util/firebase";
import { useStateValue } from "../../util/StateProvider";
import Checkout from "../checkout-module/Checkout.js";
import Header from "../header-module/Header.js";
import Home from "../home-module/Home.js";
import Login from "../login-module/Login.js";
import Payment from "../payment-module/Payment.js";
import "./App.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51JEFjDSJdvKy4mRr3TGDoI2IcAKRWxJdW8tP2uNuqdspAA2CenF75Euy1uihUoqHU4eajLY97wXrhBU8Tlg6iuon006XaZpFRi");
function App() {
  const [state, dispatch] = useStateValue();

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
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
