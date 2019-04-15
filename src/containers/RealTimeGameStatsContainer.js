import React from "react";
import { Segment, Grid, Divider } from "semantic-ui-react";
import RealTimeGameStats from "../components/RealTimeGameStats";

class RealTimeGameStatsContainer extends React.Component {
  render() {
    return (
      <Segment>
        {this.props.stats ? (
          <RealTimeGameStats stats={this.props.stats} />
        ) : null}
      </Segment>
    );
  }
}

export default RealTimeGameStatsContainer;
