import React from "react";
import { Segment } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faListUl } from "@fortawesome/free-solid-svg-icons";

class PointLog extends React.Component {
  render() {
    return (
      <Segment.Group horizontal>
        <Segment color="yellow">
          <FontAwesomeIcon icon={faCoins} size="sm" /> {`Points: ${this.props.points}`} 
        </Segment>
        <Segment color="yellow">
          <FontAwesomeIcon icon={faListUl} size="sm" /> Point Log
        </Segment>
      </Segment.Group>
    );
  }
}

export default PointLog;
