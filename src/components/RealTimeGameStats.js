import React from "react";
import { Segment } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGasPump,
  faCircleNotch,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

class RealTimeGameStats extends React.Component {
  render() {
    const { stats } = this.props

    return (
      <Segment.Group horizontal>
        <Segment>
          <FontAwesomeIcon icon={faGasPump} size="sm" /> {`Fuel:`}
          <p>{stats.fuel}</p>
        </Segment>
        <Segment>
          <FontAwesomeIcon icon={faCircleNotch} size="sm" spin />
          {`Tire Tread:`} <p>{stats.tread}</p>
        </Segment>
        <Segment>
          <FontAwesomeIcon icon={faHeart} size="sm" /> {`Health:`}
          <p>{stats.health}</p>
        </Segment>
      </Segment.Group>
    );
  }
}

export default RealTimeGameStats;
