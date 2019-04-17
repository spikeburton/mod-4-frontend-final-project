import React from "react";
import { List, Image } from "semantic-ui-react";

const ScoreBoardCard = props => {

    const name = props.username.toUpperCase()
  return (
    <List.Item>
      <Image
        floated="left"
        size="tiny"
        src={require(`../images/cars${props.image}`)}
      />
      <List.Content floated="left">
        <List.Header>{`Points: ${props.points}`}</List.Header>
        {`User: ${name} Car: ${props.car}`}
      </List.Content>
    </List.Item>
  );
};

export default ScoreBoardCard;

/*
<Card
      header={props.username.toUpperCase()}
      meta={`Points: ${props.points}`}
      extra={props.car}
    /> */
