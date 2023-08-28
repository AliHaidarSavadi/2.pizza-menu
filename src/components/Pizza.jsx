import React from "react";

export default function Pizza({ pizzaObject }) {
  // if (props.pizzaObject.soldOut) return null;

  return (
    <li
      className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}
      // style={pizzaObject.soldOut ? { filter: "grayscale(100%)" } : {}}
    >
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "Sold Out" : pizzaObject.price + 3}</span>
      </div>
    </li>
  );
}
