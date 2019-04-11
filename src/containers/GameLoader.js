import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import ScoreBoardContainer from "./ScoreBoardContainer";
import CarContainer from "./CarContainer";
import StartGameButton from "../components/StartGameButton";

class GameLoader extends Component {
  render() {
    return (
      <Segment.Group>
        <Segment>
          <ScoreBoardContainer />
          <CarContainer />
        </Segment>
        <StartGameButton />
      </Segment.Group>
    );
  }
}

export default GameLoader;
