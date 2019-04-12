import React from "react";
import CarImageCard from "./CarImageCard";
import { Card } from "semantic-ui-react";

class CarImageList extends React.Component {
  render() {
    return (
      <Card.Group>
        <CarImageCard />
      </Card.Group>
    );
  }
}

export default CarImageList;
