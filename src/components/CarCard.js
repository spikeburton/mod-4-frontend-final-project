import React from "react";
import { Card, Button, Icon } from "semantic-ui-react";

const CarCard = props => {
  const { car } = props;

  const description = (
    <div>
      <p>Fuel: {car.max_fuel}</p>
      <p>Tread: {car.tread_wear}</p>
      <p>Health: {car.health}</p>
    </div>
  );

  return (
    <Card
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
    />
  );
};

export default CarCard;

    // <Icon bordered name='users' />
    // <Icon bordered color='teal' name='users' />
    // <Icon bordered inverted color='black' name='users' />
    // <Icon bordered inverted color='teal' name='users' />

/* <Button
            size="mini"
            content="Select"
            // primary
            onClick={() => props.handleClick(car)}
          />
          <Button
            size="mini"
            content="Delete"
            // secondary
            onClick={() => props.deleteCar(car)}
          /> */
    //   return (
    //     <Card
    //       className="car-card"
    //       onClick={() => localStorage.setItem("car", car.id)}
    //     >
    //       <img src={car.up} alt="car" />
    //       <h4>name: {car.name}</h4>
    //       <p>max fuel: {car.max_fuel}</p>
    //       <p>tread: {car.tread_wear}</p>
    //       <p>health: {car.health}</p>
    //     </Card>
