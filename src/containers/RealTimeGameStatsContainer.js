import React from 'react';
import { Segment, Grid, Divider } from "semantic-ui-react";
import RealTimeGameStats from '../components/RealTimeGameStats'

class RealTimeGameStatsContainer extends React.Component {

    render() {
        return (
          <Segment>
            <RealTimeGameStats />
          </Segment>
        );
    }
}

export default RealTimeGameStatsContainer;