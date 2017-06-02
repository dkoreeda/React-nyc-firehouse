import React from 'react';

const House = (props) => {
  console.log(props.houses);
  return (
    <div className="house-detail">
      <h3 className="currentHouse"> Name: {props.house.FacilityName} </h3>
      <h3 className="currentHouse"> Address: {props.house.FacilityAddress} </h3>
      <h3 className="currentHouse"> Borough: {props.house.Borough} </h3>
    </div>
  );
}

export default House;
