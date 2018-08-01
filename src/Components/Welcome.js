import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { text, toggle } = this.props;
    if (toggle) {
      return <h1 className="App-title">{text}</h1>;
    }
    return null;
  }
}

export default Welcome;
