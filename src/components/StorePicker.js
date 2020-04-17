import React, { Component } from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {

  state = {
    storeCount: 0,
  };

  myInput = React.createRef();

  goToStore = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from the input
    const storeName = this.myInput.current.value;
    // 3. change page to /store/whatever-was-entered
    this.props.history.push(`/store/${storeName}`);
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
          Visit Store <span role="img" aria-label="right-arrow">➡️</span>
        </button>
      </form>
    );
  }
}

export default StorePicker;
