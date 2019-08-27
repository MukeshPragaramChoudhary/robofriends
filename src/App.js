import React from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    };
  }

  onSearchChange = event => {
    // console.log(typeof event.target.value);
    this.setState({
      searchfield: event.target.value
    });
    // this.state.searchfield = event.target.value;
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    console.log(filteredRobots);
    return (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>

        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
