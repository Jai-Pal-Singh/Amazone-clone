import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "../../middleware/axios.js";
// import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getBasketTotal } from "../../util/reducer";
import { useStateValue } from "../../util/StateProvider";
import CheckoutProduct from "../checkout-module/CheckoutProduct";
import "./Payment.css";

function Payment() {
  const [state] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const history = useHistory();

  useEffect(() => {
    //generate the special stripe secret which allows us to charge a customer
    
    const total = getBasketTotal(state.basket) * 100;
    const getClientSecret = async () => {
      const response = await axios({
        method: "POST",
        url: `/payments/create?total=`+total,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [state.basket]);

  console.log("Client Secret : " + clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace("/orders");
      });
  };
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h2>
          Checkout(
          <Link to="/checkout">
            {state.basket ? state.basket?.length : 0} items
          </Link>
          )
        </h2>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{state.user?.email}</p>
            <p>V.P.O.: Deorasar, Jhunjhunu</p>
            <p>Rajasthan, 333021</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {state.basket?.map((item) => (
              <CheckoutProduct
                key={item.key}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                alt={item.alt}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}></CardElement>
              <div className="payment__priceContainer">
                <h4>Order Total: ₹ {getBasketTotal(state.basket)}</h4>
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
                {error && <div>{error}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
