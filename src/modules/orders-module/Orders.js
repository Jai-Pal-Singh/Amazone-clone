import React, { useEffect, useState } from "react";
import { db } from "../../util/firebase";
import { useStateValue } from "../../util/StateProvider";
import Order from "./Order";
import "./Orders.css";

function Orders() {
  const [state] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (state.user) {
      db.collection("user")
        .doc(state.user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [state.user]);
  return (
    <div className="orders">
      <h2>Your Orders</h2>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
