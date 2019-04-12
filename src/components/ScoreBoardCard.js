import React from "react";
import { Card } from "semantic-ui-react";

const ScoreBoardCard = props => {
  return (
    <Card>
      <h4>username: {props.username}</h4>
      <p>car: {props.car}</p>
      <p>points: <span className="points">{props.points}</span></p>
    </Card>
  );
};

export default ScoreBoardCard;
