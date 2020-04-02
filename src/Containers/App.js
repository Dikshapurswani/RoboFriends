import React, { Component } from "react";
import Cardlist from "../Components/cardlist";
import { robots } from "../robots";
import Scroll from "../Components/Scroll";
import Searchbar from "../Components/Searchbar";
import ErrorBoundry from "../Components/ErrorBoundry";

class App extends Component {
  constructor() {
    super();
    this.state = { robots: [], searchfield: "" };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }
  render() {
    const filteredArray = this.state.robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loadingggg......</h1>;
    } else {
      return (
        <div className="tc">
          <h1>Helloo RoboFriends</h1>
          <Searchbar onSearchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <Cardlist robots={filteredArray} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
  onSearchChange = event => {
    console.log(event.target.value);
    this.setState({ searchfield: event.target.value });
  };
}

export default App;
