import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { API } from "../data";

class MakeCarButton extends React.Component {
  createCar = () => {
    const { car, stats } = this.props;

    const carObj = {
      user_id: localStorage.getItem("user"),
      name: car.name,
      up: car.up,
      down: car.down,
      left: car.left,
      right: car.right,
      max_fuel: stats.max_fuel,
      tread_wear: stats.tread_wear,
      health: stats.health
    };

    fetch(`${API}/cars`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(carObj)
    });
  };

  render() {
    const { car } = this.props;

    return (
      <div>
        {car ? (
          <Link to="/">
            <Button onClick={this.createCar}>Create Car</Button>
          </Link>
        ) : (
          <Button disabled>Create Car</Button>
        )}
      </div>
    );
  }
}

export default MakeCarButton;
