import React from "react";
import { Card, Button, Image, Icon } from "semantic-ui-react";

const CarCard = props => {
  const { car } = props;

  const description = (
    <div>
      <p><strong>Fuel:</strong> {car.max_fuel}</p>
      <p><strong>Tread:</strong> {car.tread_wear}</p>
      <p><strong>Health:</strong> {car.health}</p>
    </div>
  );

  return (
    <Card>
      <Card.Content>
        <Image size="tiny" src={require(`../images/cars${car.right}`)} />
      </Card.Content>
      <Card.Content>
          <Card.Header>
            <strong>{car.name}</strong>
          </Card.Header>
          <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          {props.selected === car.id ? (
            <Button disabled color="lightgrey">
              <Icon name="check" />
            </Button>
          ) : (
            <Button
              basic
              color="green"
              onClick={() => props.handleClick(car)}
            >
              <Icon name="check" />
            </Button>
          )}
          <Button basic color="red">
            <Icon name="trash alternate" />
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default CarCard;

/* <Card
  header={car.name}
  meta={description}
  description={
    <div>
      <img src={require(`../images/cars${car.right}`)} alt={car.name} />
    </div>
  }
  extra={
    <div>
        {props.selected === car.id ? <Button
        size="mini"
        content="Selected"
        disabled
      /> : 
      <Button
        size="mini"
        content="Select"
        primary
        onClick={() => props.handleClick(car)}
        /> }
      <Button
        size="mini"
        content="Delete"
        secondary
        onClick={() => props.deleteCar(car)}
      />
    </div>
  }
/> */