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
        <Segment color="red">
          <FontAwesomeIcon icon={faGasPump} size="md" /> {`Fuel: ${stats.fuel}`}
        </Segment>
        <Segment color="red">
          <FontAwesomeIcon icon={faCircleNotch} size="md" spin /> {`Tire Tread: ${stats.tread}`}
        </Segment>
        <Segment color="red">
          <FontAwesomeIcon icon={faHeart} size="md" /> {`Health: ${stats.health}`}
        </Segment>
      </Segment.Group>
    );
  }
}

export default RealTimeGameStats;
