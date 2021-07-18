const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const secretKey =
  "sk_test_51JEFjDSJdvKy4mRrcwg9KtHGPzZJ9VzRCfbHEam7vmRlAF7HNI3HIgs6XbmHXgGIMZxJoSH5Q5nDVrY4RzT1royh00BHwsTFei";
const stripe = require("stripe")(secretKey);

// => API setup

// - App Config
const app = express();

// - Middlesware
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get("/", (req, res) => res.status(200).send("hello world"));

var getClientSecret = async (req, res) => {
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
};

app.post("/payments/create", getClientSecret);

// - Listen Command
exports.api = functions.https.onRequest(app);
