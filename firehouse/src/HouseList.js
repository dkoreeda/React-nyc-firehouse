import React, { Component } from 'react';

class HouseList extends Component {

  renderHouses() {
    return this.props.houses.map((house, index) => {
      return (
        <li className="item" key={index} onClick={() => {this.props.selectHouse(house)}} >
          {house.FacilityName}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list">
        {this.renderHouses()}
      </ul>
    )
  }
}

export default HouseList;
