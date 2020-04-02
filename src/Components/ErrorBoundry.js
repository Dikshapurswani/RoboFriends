import React, { Component } from "react";

class ErrorBoundry extends Component {
  state = { hasError: false };
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError == true) {
      return <h1>Ooppppssss....</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundry;
