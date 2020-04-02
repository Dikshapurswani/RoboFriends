import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    return (
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2">
        <img
          alt="robot"
          src={`https://robohash.org/${this.props.id}?100x1 00`}
        />
        <div>
          <h2>{this.props.name}</h2>
          <p>{this.props.email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
