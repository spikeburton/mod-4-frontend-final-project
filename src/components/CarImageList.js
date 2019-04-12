import React from "react";
import CarImageCard from "./CarImageCard";
import { Card } from "semantic-ui-react";

class CarImageList extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={2}>
        <CarImageCard />
      </Card.Group>
    );
  }
}

export default CarImageList;
