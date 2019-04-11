import React, { Component } from "react";
import { Segment, Grid } from "semantic-ui-react";
import ScoreBoardContainer from "./ScoreBoardContainer";
import CarContainer from "./CarContainer";
import StartGameButton from "../components/StartGameButton";

class GameLoader extends Component {
  render() {
    return (
      <Segment.Group>
        <Segment>
          <Grid columns={2}>
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <ScoreBoardContainer />
              </Grid.Column>
              <Grid.Column>
                <CarContainer />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment>
          <StartGameButton />
        </Segment>
      </Segment.Group>
    );
  }
}

export default GameLoader;
