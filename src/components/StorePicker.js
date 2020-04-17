import React, { Component } from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {

  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }
  state = {
    storeCount: 0,
  };

  myInput = React.createRef();

  goToStore = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from the input
    console.log(this.myInput);

    // 3.
    console.log(`going to store`, event);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Select Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          ref = {this.myInput}
          defaultValue={getFunName()}
        />
        <button type="submit">
          Visit Store <span aria-label="right-arrow">➡️</span>
        </button>
      </form>
    );
  }
}

export default StorePicker;
