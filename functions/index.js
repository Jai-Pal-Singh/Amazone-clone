const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const secretKey1 = "sk_test_51JEFjDSJdvKy4mRrcwg9KtHGPzZJ9VzRCfbHEam7vmRlAF";
const secretKey2 = "7HNI3HIgs6XbmHXgGIMZxJoSH5Q5nDVrY4RzT1royh00BHwsTFei";
const stripe = require("stripe")(secretKey1+secretKey2);
// import { loadStripe } from "@stripe/stripe-js/pure";

// // Stripe.js will not be loaded until `loadStripe` is called
// const stripe = await loadStripe(secretKey);
// => API setup

// - App Config
const app = express();

// - Middlesware
app.use(cors({origin: true}));
app.use(express.json());
app.all("/", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// - API Routes
app.get("/", (req, res, next) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res, next) => {
  const total = req.query.total;
  console.log("Payment request for amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });

  console.log("paymentIntent.client_secret : " + paymentIntent.client_secret);
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen Command
exports.api = functions.https.onRequest(app);
