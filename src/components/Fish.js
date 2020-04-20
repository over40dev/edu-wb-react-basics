import React from "react";
import { formatPrice } from "../helpers";

const Fish = (props) => {
  const { name, image, desc, price, status} = props.details;
  const { addToOrder, index } = props;
  const isAvailable = status === "available";

  // const addOrder = () => {
  //   addToOrder(index);
  // }

  return (
    <li className="menu-fish" >
      <img src={image} alt={name} />
      <h3 className="fish-name">
        {name}
        <span className="price">{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button 
        disabled={!isAvailable}
        onClick={() => addToOrder(index)}>
        {isAvailable ? 'Add to Order' : 'Sold Out'}
        </button>
      {/* <button 
        disabled={!isAvailable}
        onClick={addOrder}>
        {isAvailable ? 'Add to Order' : 'Sold Out'}
        </button> */}
    </li>
  );
};
export default Fish;
