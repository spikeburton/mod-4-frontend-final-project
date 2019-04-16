import React from "react";
import { Card } from "semantic-ui-react";

class CarImageCard extends React.Component {

    handleClick = () => {
        this.props.renderCarStats(this.props.car)
    }

  render() {
    const { car } = this.props;
    const description = (
      <div>
        <p>Fuel: {car.max_fuel}</p>
        <p>Tread: {car.tread_wear}</p>
        <p>Health: {car.health}</p>
      </div>
    );

    return (
      <Card
        onClick={this.handleClick}
        header={car.name}
        description={description}
        extra={
          <img src={require(`../images/cars${car.right}`)} alt={car.name} />
        }
      />
    );
  }
}

export default CarImageCard;
