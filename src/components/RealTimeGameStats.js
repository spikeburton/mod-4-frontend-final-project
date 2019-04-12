import React from 'react';
import { Segment } from "semantic-ui-react";

class RealTimeGameStats extends React.Component {

    render() {
        return (
            <Segment.Group horizontal>
              <Segment color="red">Fuel: 0</Segment>
              <Segment color="red">Tire Tread: 0</Segment>
              <Segment color="red">Health: 0</Segment>
            </Segment.Group>
        );
    }
}

export default RealTimeGameStats;