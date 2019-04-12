import React from "react";
import ScoreBoardList from "../components/ScoreBoardList";
import { Segment } from "semantic-ui-react";

const API = "http://localhost:3000";

class ScoreBoardContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      scores: []
    };
  }

  componentDidMount() {
    fetch(`${API}/scores`)
      .then(response => response.json())
      .then(scores => this.setState({ scores }));
  }

  render() {
    return (
      <Segment.Group>
        <Segment>
          <h2>Leaderboard</h2>
        </Segment>
        <Segment placeholder>
          <ScoreBoardList scores={this.state.scores} />
        </Segment>
      </Segment.Group>
    );
  }
}

export default ScoreBoardContainer;
