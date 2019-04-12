import React, { Component } from "react";
import { Card } from 'semantic-ui-react'
import CarCard from "./CarCard";

class CarList extends Component {
  render() {
    return (
      <Card.Group id="car-list" itemsPerRow={2}>
        {this.props.cars.map((car, i) => <CarCard key={i} {...car} />)}
      </Card.Group>
    );
  }
}

export default CarList;
