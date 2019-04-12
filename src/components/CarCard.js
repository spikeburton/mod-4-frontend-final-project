import React from "react";
import { Card } from "semantic-ui-react";

const CarCard = props => {
  return (
    <Card className="car-card">
      <img src={props.up} alt="car" />
      <h4>name: {props.name}</h4>
      <p>max fuel: {props.max_fuel}</p>
      <p>tread: {props.tread_wear}</p>
      <p>health: {props.health}</p>
    </Card>
  );
};

export default CarCard;
