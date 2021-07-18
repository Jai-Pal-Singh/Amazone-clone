import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "../checkout-module/CheckoutProduct";

function Order({ order }) {
  var counter = 0;
  var key;
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          key={item.id.toString() + counter++}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          alt=""
          hideButton
        />
      ))}

      <h3 className="order__total">Order Total: ₹{order.data.amount / 100}</h3>
    </div>
  );
}

export default Order;
