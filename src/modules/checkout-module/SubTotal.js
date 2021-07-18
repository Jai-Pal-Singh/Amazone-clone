import React from "react";
import { useHistory } from "react-router-dom";
import { getBasketTotal } from "../../util/reducer";
import { useStateValue } from "../../util/StateProvider";
import "./SubTotal.css";

function SubTotal() {
  const [state] = useStateValue();
  const history = useHistory();
  return (
    <div className="subtotal">
      <div>
        <p>
          Subtotal ({state.basket?.length} items):{" "}
          <strong>₹ {getBasketTotal(state.basket)}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" name="gift" id="gift" /> This order contains a
          gift
        </small>
      </div>
      <button className="button" onClick={(e) => history.push("/payment")}>
        Proceed to checkout
      </button>
    </div>
  );
}

export default SubTotal;
