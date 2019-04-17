import React from "react";
import ScoreBoardList from "../components/ScoreBoardList";
import { Segment } from "semantic-ui-react";
import { API } from "../data"

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
      console.log(this.state.scores)
    return (
      <Segment.Group>
        <Segment>
          <h2>Leaderboard</h2>
        </Segment>
        <Segment placeholder className="divided-panel-container">
          <ScoreBoardList scores={this.state.scores.sort((a,b) => b.points - a.points)} />
        </Segment>
      </Segment.Group>
    );
  }
}

export default ScoreBoardContainer;
