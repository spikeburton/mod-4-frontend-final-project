import React from "react";
import CarImageList from "../components/CarImageList";
import { Segment } from "semantic-ui-react";

class CarImageContainer extends React.Component {

  render() {
    return (
      <Segment.Group>
        <Segment>
          <h2>Car Type</h2>
        </Segment>
        <Segment placeholder className="divided-panel-container">
          <CarImageList renderCarStats={this.props.renderCarStats} />
        </Segment>
      </Segment.Group>
    );
  }
}

export default CarImageContainer;
