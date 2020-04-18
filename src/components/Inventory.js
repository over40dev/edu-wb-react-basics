import React from "react";
import AddFishForm from "./AddFishForm";

const Inventory = ({ addFish, loadSamples }) => (
  <div className="inventory">
    <h2>Inventory</h2>
    <AddFishForm addFish={addFish} />
    <button onClick={loadSamples}>Load Sample Data</button>
  </div>
);

export default Inventory;
