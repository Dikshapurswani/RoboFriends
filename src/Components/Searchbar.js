import React, { Component } from "react";

class Seachbar extends Component {
  state = {};
  render() {
    return (
      <div className="pa2">
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="search robo"
          onChange={this.props.onSearchChange}
        />
      </div>
    );
  }
}

export default Seachbar;
