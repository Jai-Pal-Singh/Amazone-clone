import React from "react";
import { getBasketTotal } from "../../util/reducer";
import { useStateValue } from "../../util/StateProvider";
import "./SubTotal.css";
// import CurrencyFormat from "react-format-currency";
// import { IntlProvider } from "react-intl";

function SubTotal() {
  const [state, dispatch] = useStateValue();
  return (
    // <IntlProvider>
    <div className="subtotal">
      {/* <CurrencyFormat */}
      {/* renderText={(value) => ( */}
      {/* <div> */}
      {/* <p> */}
      {/* Subtotal (0 items): <strong>{` ${value} `}</strong>
       */}
      {/* Subtotal (0 items): <strong>0</strong> */}
      {/* </p> */}
      {/* <small className="subtotal__gift"> */}
      {/* <input type="checkbox" name="gift" id="gift" /> */}
      {/* This order contains a gift */}
      {/* </small> */}
      {/* </div> */}
      {/* )} */}
      {/* decimalScale={2} */}
      {/* // value={getBasketTotal(basket)} */}
      {/* value={0} */}
      {/* displayType={"Text"} */}
      {/* thousandSeparator={true} */}
      {/* prefix={"₹"} */}
      {/* ></CurrencyFormat> */}
      <p>
        {/* Subtotal (0 items): <strong>{` ${value} `}</strong>
         */}
        Subtotal ({state.basket?.length} items):{" "}
        <strong>₹ {getBasketTotal(state.basket)}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" name="gift" id="gift" /> This order contains a
        gift
      </small>
      <button className="button">Proceed to checkout</button>
    </div>
    // </IntlProvider>
  );
}

export default SubTotal;
