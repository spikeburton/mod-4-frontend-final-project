import React from 'react';
import { Segment } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGasPump, faCircleNotch, faHeart } from "@fortawesome/free-solid-svg-icons";




class RealTimeGameStats extends React.Component {


    render() {
        return (
          <Segment.Group horizontal>
            <Segment color="red">
              <FontAwesomeIcon icon={faGasPump} size="lg" /> Fuel: 0
            </Segment>
            <Segment color="red">
              <FontAwesomeIcon icon={faCircleNotch} size="lg" spin />  Tire Tread: 0
            </Segment>
            <Segment color="red">
              <FontAwesomeIcon icon={faHeart} size="lg" />  Health: 0
            </Segment>
          </Segment.Group>
        );
    }
}

export default RealTimeGameStats;