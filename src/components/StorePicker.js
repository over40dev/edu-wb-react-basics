import React, {Component} from 'react';

class StorePicker extends Component {
  render() {
    return (
      <form className="store-picker">
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name"/>
        <button type="submit">Visit Store <span aria-label="right-arrow">➡️</span></button>
      </form>
    );
  }
}

export default StorePicker;