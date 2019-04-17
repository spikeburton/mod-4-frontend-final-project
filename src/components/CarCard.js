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
        <Image
          size="tiny"
          src={require(`../images/cars${car.right}`)}
          style={{ width: "60px" }}
        />
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
            <Button disabled>
              <Icon name="check" style={{ margin: "0px 0px 0px 3px" }} />
            </Button>
          ) : (
            <Button
              basic
              color="green"
              onClick={() => props.handleClick(car)}
            >
              <Icon name="check" style={{ margin: "0px 0px 0px 3px" }} />
            </Button>
          )}
          <Button basic color="red">
            <Icon
              name="trash alternate"
              style={{ margin: "0px 0px 0px 0px" }}
              onClick={() => props.deleteCar(car)}
            />
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