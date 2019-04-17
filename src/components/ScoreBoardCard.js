import React from "react";
import { Card } from "semantic-ui-react";

const ScoreBoardCard = props => {
  return (
    <Card
      header={props.username.toUpperCase()}
      meta={`Points: ${props.points}`}
      extra={props.car}
    />
  );
};

export default ScoreBoardCard;
