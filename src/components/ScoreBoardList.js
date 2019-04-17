import React, { Component } from "react";
import { List } from "semantic-ui-react";
import ScoreBoardCard from "./ScoreBoardCard";

class ScoreBoardList extends Component {
  render() {
    return (
      <List celled className="card-container">
        {this.props.scores.map((score, i) => (
          <ScoreBoardCard key={i} {...score} />
        ))}
      </List>
    );
  }
}

export default ScoreBoardList;

/* <Card.Group itemsPerRow={2} className="card-container">
        {this.props.scores.map((score, i) => (
          <ScoreBoardCard key={i} {...score} />
        ))}
      </Card.Group> */