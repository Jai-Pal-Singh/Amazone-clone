import React from "react";
import { useStateValue } from "../../util/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";
// import { AnimatedList } from "react-animated-list";
// import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket }] = useStateValue();
  // var counter = 0;

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Javed/ILM/1/2_CBCC_ILM_640x45._CB665798186_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h3 className="checkout__title">Your shopping basket</h3>
          {/* <FlipMove enterAnimation="elevator" leaveAnimation="elevator"> */}
          {basket.map((item) => (
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
          {/* </FlipMove> */}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
