import React, { Component } from "react";

import Card from "./card";

class Cardlist extends Component {
  state = {};
  render() {
    return <div>{this.numberOfRobots()}</div>;
  }

  numberOfRobots() {
    const robotArrar = this.props.robots.map((robot, i) => {
      const { id, name, email } = robot;
      return <Card key={i} id={id} name={name} email={email} />;
    });
    return robotArrar;
  }
}

export default Cardlist;
