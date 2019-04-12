import React from "react";
import ScoreBoardList from "../components/ScoreBoardList";

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
    return <ScoreBoardList scores={this.state.scores} />;
  }
}

export default ScoreBoardContainer;
