import React, { Component } from "react";
import { formatPrice } from "../helpers";

class Order extends Component {
  renderOrder = (key) => {
    const fish = this.props.fishes[key],
      { name, price, status } = fish,
      count = this.props.order[key],
      isAvailable = fish && status === "available";

    if (isAvailable) {
      return (
        <li key={key}>
          <div className="order-title">
            <span className="count">{count} lbs </span>
            <span>{name}</span>
          </div>
          <span className="order-price">{formatPrice(price * count)}</span>
        </li>
      );
    } else {
      return (
        <li key={key}>
          <div className="order-title">
            <span>Sorry, {name} is no longer available</span>
          </div>
        </li>
      );
    }
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const orderTotal = orderIds.reduce((prevTotal, key) => {
      const count = this.props.order[key],
        fish = this.props.fishes[key],
        { price, status } = fish,
        isAvailable = fish && status === "available";
      return isAvailable ? prevTotal + price * count : prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          Total:
          <strong>{formatPrice(orderTotal)}</strong>
        </div>
      </div>
    );
  }
}

// {Object.keys(order).map((key) => (
//   <li key={key}>
//     <div className="order-title">
//       <span className="count">{order[key]} lbs </span>
//       <span>{fishes[key].name}</span>
//     </div>
//     <span className="order-price">{formatPrice(fishes[key].price * order[key])}</span>
//   </li>
// ))}

export default Order;
