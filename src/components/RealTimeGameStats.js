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
          <FontAwesomeIcon icon={faGasPump} size="lg" /> {`Fuel: ${stats.fuel}`}
        </Segment>
        <Segment color="red">
          <FontAwesomeIcon icon={faCircleNotch} size="lg" spin /> {`Tire Tread: ${stats.tread}`}
        </Segment>
        <Segment color="red">
          <FontAwesomeIcon icon={faHeart} size="lg" /> {`Health: ${stats.health}`}
        </Segment>
      </Segment.Group>
    );
  }
}

export default RealTimeGameStats;
