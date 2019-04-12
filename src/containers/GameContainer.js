import React from 'react';
import MapContainer from './MapContainer'
import RealTimeGameStatsContainer from './RealTimeGameStatsContainer'
import PointLog from '../components/PointLog'
import { Segment, Grid, Divider } from "semantic-ui-react";

class GameContainer extends React.Component {

    render() {
        return (
          <div>
            <Segment>
              <Grid columns={1} textAlign="center">
                <Grid.Row verticalAlign="middle">
                  <Grid.Column>
                    <MapContainer />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
            <Segment>
              <Grid columns={2} textAlign="center">
                <Divider id='stats-log-divider' vertical>-Stats  |  Log-  </Divider>
                <Grid.Row verticalAlign="middle">
                  <Grid.Column>
                    <RealTimeGameStatsContainer />
                  </Grid.Column>
                  <Grid.Column>
                    <PointLog />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </div>
        );
    }
}

export default GameContainer;
