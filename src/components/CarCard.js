import React from "react";
import { Card } from "semantic-ui-react";

const CarCard = props => {
    let { car } = props
  
  return (
    <Card className="car-card" onClick={() => {props.getCarSelected(car)}}>
      <img src={car.up} alt="car" />
      <h4>name: {car.name}</h4>
      <p>max fuel: {car.max_fuel}</p>
      <p>tread: {car.tread_wear}</p>
      <p>health: {car.health}</p>
    </Card>
  );
};

export default CarCard;
