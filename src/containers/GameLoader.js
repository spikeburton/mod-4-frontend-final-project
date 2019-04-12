import React, { Component } from "react";
import { Segment, Grid, Divider } from "semantic-ui-react";
import ScoreBoardContainer from "./ScoreBoardContainer";
import CarContainer from "./CarContainer";
import StartGameButton from "../components/StartGameButton";

class GameLoader extends Component {
  render() {
    return (
      <Segment.Group id="game-loader">
        <Segment id="game-loader-top">
          <Grid columns={2} textAlign="center">
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <ScoreBoardContainer />
              </Grid.Column>
              <Divider vertical></Divider>
              <Grid.Column>
                <CarContainer />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment textAlign="center">
          <StartGameButton />
        </Segment>
      </Segment.Group>
    );
  }
}

export default GameLoader;
