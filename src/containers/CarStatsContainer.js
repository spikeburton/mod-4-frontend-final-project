import React from "react";
import { Segment } from "semantic-ui-react";
import CarStats from "../components/CarStats";

class CarStatsContainer extends React.Component {
  render() {
    return (
      <Segment.Group>
        <Segment>
          <h2>Car Stats</h2>
        </Segment>
        <Segment id="car-stats-list">
          <CarStats
            car={this.props.car}
            stats={this.props.stats}
            handleChange={this.props.handleChange}
            handleDoubleClick={this.props.handleDoubleClick}
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default CarStatsContainer;
