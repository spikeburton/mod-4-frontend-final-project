import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import ScoreBoardCard from "./ScoreBoardCard";

class ScoreBoardList extends Component {
  render() {
    return (
      <Card.Group itemsPerRow={2} className="card-container">
        {this.props.scores.map((score, i) => (
          <ScoreBoardCard key={i} {...score} />
        ))}
      </Card.Group>
    );
  }
}

export default ScoreBoardList;
