import React from 'react';
import Header from '../Header';
import Order from '../Order';
import Inventory from '../Inventory';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order></Order>
        <Inventory></Inventory>
      </div>
    )
  }

}

export default App;
