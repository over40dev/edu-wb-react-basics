import React from "react";
import Header from "../Header";
import Order from "../Order";
import Inventory from "../Inventory";
import "./App.css";

class App extends React.Component {
  state = {
    fishes: {},
    orders: {},
  };

  addFish = (fish) => {
    /* 
    1. Take a copy of existing state 
    because you never want to touch state directly 
    (called a mutation), instead treat state as 
    immutable (unchangable). Not doing this could lead to 
    perf issues as well as things updating out of order.
    object spread -- not necessary to do deep clone 
    (top level copy enough)
    */
    const fishes = { ...this.state.fishes };
    /* 
    2. Add our new fish to that fishes variables
    */
    fishes[`fish${Date.now()}`] = fish;
    /*
    3. Set the new fishes object to state using
    React's setState method
    */
    this.setState({
      fishes,
    });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order></Order>
        <Inventory addFish={this.addFish}></Inventory>
      </div>
    );
  }
}

export default App;
