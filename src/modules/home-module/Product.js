import React from "react";
import { useStateValue } from "../../util/StateProvider";
import "./Product.css";

function Product({ id, title, price, image, alt, rating }) {
  const [{}, dispatch] = useStateValue();

  function addToBasket() {
    //dispatch the item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
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
    <div className="product" id={id}>
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
              <p>⭐</p>
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
