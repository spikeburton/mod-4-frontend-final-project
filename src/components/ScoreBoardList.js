import React from "react";
import { Card } from "semantic-ui-react";
import ScoreBoardCard from "./ScoreBoardCard";

class ScoreBoardList extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={2}>
        <ScoreBoardCard />
      </Card.Group>
    );
  }
}

export default ScoreBoardList;
