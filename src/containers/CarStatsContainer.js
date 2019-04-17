import React from "react";
import { Segment, Message } from "semantic-ui-react";
import CarStats from "../components/CarStats";

class CarStatsContainer extends React.Component {
  render() {
    return (
      <Segment.Group>
        <Segment>
          <h2>Car Stats</h2>
        </Segment>
        <Segment className="divided-panel-container">
          {this.props.car ? (
            <CarStats
              car={this.props.car}
              stats={this.props.stats}
              handleChange={this.props.handleChange}
              handleDoubleClick={this.props.handleDoubleClick}
            />
          ) : (
            <Message>Please Choose a Preset Car</Message>
          )}
        </Segment>
      </Segment.Group>
    );
  }
}

export default CarStatsContainer;
