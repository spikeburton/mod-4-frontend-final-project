import React from 'react';
import MapContainer from './MapContainer'
import RealTimeGameStatsContainer from './RealTimeGameStatsContainer'
import PointLog from '../components/PointLog'
import { Segment, Grid, Divider, Container } from "semantic-ui-react";
import "../stylesheets/GameContainer/GameContainer.css";

class GameContainer extends React.Component {

    render() {
        return (
          <Segment.Group id="game-container">
            <div id="game-container-top">
                <MapContainer />
            </div>

            <Segment id="stats-log-container">
              <Grid columns={2} textAlign="center">
                <Divider id="stats-log-divider" vertical />
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
          </Segment.Group>
        );
    }
}

export default GameContainer;
