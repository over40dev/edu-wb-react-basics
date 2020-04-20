import React from "react";
import { formatPrice } from "../helpers";

const Order = ({ order, fishes }) => {
  return (
    <div>
      <ul className="order">
        {Object.keys(order).map((key) => (
          <li key={key}>
            <div className="order-title">
              <span className="count">{order[key]} lbs </span>
              <span>{fishes[key].name}</span>
            </div>
            <span className="order-price">{formatPrice(fishes[key].price * order[key])}</span>
          </li>
        ))}
      </ul>
      <div className="total">
        Total:
        {formatPrice(
          Object.keys(order).reduce((acc, key) => acc + order[key] * fishes[key].price, 0),
        )}
      </div>
    </div>
  );
};

export default Order;
