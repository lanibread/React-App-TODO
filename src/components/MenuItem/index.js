import React from "react";

const MenuItem = ({ itemId, itemPrice, itemName, itemDescription }) => {
  return (
    <div id={`item-${itemId}`} className="menu-item">
      <h1>{itemName}</h1>
      <p>{itemDescription}</p>
      <span>${itemPrice}</span>
      <button>Add to Cart</button>
    </div>
  );
};

export default MenuItem;