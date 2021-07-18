import React from "react";
import { useStateValue } from "../../util/StateProvider";
import "./Product.css";

function Product({ id, title, price, image, alt, rating }) {
  const [state, dispatch] = useStateValue();

  function addToBasket() {
    let counter = 0;
    //dispatch the item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        key: id.toString() + counter++,
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
        alt: alt,
      },
    });
  }

  return (
    <div className="product" id={id.toString() + Math.random() * 100}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={id.toString() + i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt={alt} />
      <button className="button" onClick={addToBasket}>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
