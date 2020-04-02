import React, { Component } from "react";

class Scroll extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          overflow: "scroll",
          border: "5px solid black",
          height: "500px"
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Scroll;
