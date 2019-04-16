import React from "react";
import CarImageCard from "./CarImageCard";
import { Card } from "semantic-ui-react";
import { CAR_PRESETS } from '../data'

class CarImageList extends React.Component {

    mapCarCards = () => {
        return CAR_PRESETS.map((car, i) => {
            return <CarImageCard key={i} car={car} renderCarStats={this.props.renderCarStats} />
        })
    }

  render() {
    return (
      <Card.Group itemsPerRow={2}>
        {this.mapCarCards()}
      </Card.Group>
    );
  }
}

export default CarImageList;
