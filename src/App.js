import React from 'react';
import StorePicker from './components/StorePicker';
import Header from './components/Header';
import Order from './components/Order';
import Inventory from './components/Inventory';
import './App.css';
import './css/styles.css';

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
