import React from "react";
import { Card, Image } from "semantic-ui-react";

class CarImageCard extends React.Component {

    handleClick = () => {
        this.props.renderCarStats(this.props.car)
    }

  render() {
    const { car } = this.props;
    const description = (
      <div>
        <p><strong>Fuel:</strong> {car.max_fuel}</p>
        <p><strong>Tread:</strong> {car.tread_wear}</p>
        <p><strong>Health:</strong> {car.health}</p>
      </div>
    );

    return (
      <Card onClick={this.handleClick}>
        <Card.Content>
          <Image
            size="tiny"
            src={require(`../images/cars${car.right}`)}
            style={{ width: "60px" }}
          />
        </Card.Content>
        <Card.Content>
          <Card.Header style={{ 'fontSize': '1.035em' }}>
            <strong>{car.name}</strong>
          </Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
      </Card>
    );
}
}

export default CarImageCard;
/* <Card
  onClick={this.handleClick}
  header={car.name}
  description={description}
  extra={
    <img src={require(`../images/cars${car.right}`)} alt={car.name} />
  }
/> */