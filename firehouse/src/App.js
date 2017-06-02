import React, { Component } from 'react';
import './App.css';
import firehouse from './firehouse.json';
import House from './House';
import HouseList from './HouseList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      firehouses: firehouse,
      currentHouse: ''
    }
  }

  selectHouse(house) {
    this.setState({
      currentHouse: house
    });
  }

  render() {
    return (
      <div className="App flex">
        <House house={this.state.currentHouse} />
        <HouseList houses={this.state.firehouses} selectHouse={this.selectHouse.bind(this)}/>
      </div>
    );
  }
}

export default App;
