import React from "react";
import Header from "../Header";
import Order from "../Order";
import Inventory from "../Inventory";
import Fish from "../Fish";
import sampleFishes from "../../sample-fishes";
import "./App.css";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
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

  addToOrder = (key) => {
    /* 
    1. Take a copy of existing state 
    because you never want to touch state directly 
    (called a mutation), instead treat state as 
    immutable (unchangable). Not doing this could lead to 
    perf issues as well as things updating out of order.
    object spread -- not necessary to do deep clone 
    (top level copy enough)
    */
   const order = { ...this.state.order };
    /* 
    2. Either add to the order, or update the number in our order
    */
    order[key] = order[key] + 1 || 1;
    
    // optionally store the detail you need in the order object
    // instead of reaching back into original object to get detail later
    // This becomes a consideration when storing data in noSql type datastores 
    // where data is not normalized and should be stored based on how
    // it will be read (less reads are better)
    // {
    //   name: name,
    //   count: !!this.state.order[orderKey] ? this.state.order[orderKey].count + 1 : 1,
    //   cost: !!this.state.order[orderKey] ? this.state.order[orderKey].cost + price : price,
    // }
    /*
    3. Set the new orders object to orders using
    React's setState method
    */
    this.setState({
      order,
    });
  };

  loadSamples = () => {
    this.setState({
      fishes: sampleFishes,
    });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => {
              return (
              <Fish 
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />);
            })}
          </ul>
        </div>
        <Order order={this.state.order} fishes={this.state.fishes}></Order>
        <Inventory 
          addFish={this.addFish} 
          loadSamples={this.loadSamples} 
          />
      </div>
    );
  }
}

export default App;
