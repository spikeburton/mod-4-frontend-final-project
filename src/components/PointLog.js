import React from "react";
import { Segment } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

class PointLog extends React.Component {
  render() {
    return (
      <Segment color="green">
        <FontAwesomeIcon icon={faCoins} size="lg" />  Point Log
      </Segment>
    ); 
  }
}

export default PointLog;
