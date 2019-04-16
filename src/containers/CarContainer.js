import React, { Component } from "react";
import CarList from "../components/CarList";
import NewCarButton from "../components/NewCarButton";
import { API } from "../data";
import { Segment } from "semantic-ui-react";

class CarContainer extends Component {
  constructor() {
    super();
    this.state = {
      cars: [],
      selected: null
    };
  }

  componentDidMount() {
    // fetch(`${API}/cars`)
    //   .then(response => response.json())
    //   .then(cars => this.setState({ cars }));
    fetch(`${API}/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(response => response.json())
      .then(payload => {
        // console.log(payload)
        this.setState({
          cars: payload.user.cars
        });
      });
  }

  handleClick = car => {
    localStorage.setItem("car", car.id)
    this.setState({ selected: car.id })
    console.log(car);
  };

  deleteCar = car => {
    fetch(`${API}/cars/${car.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    const i = this.state.cars.indexOf(car)
    const j = (i + 1)
    this.setState({ 
        cars: [...this.state.cars.slice(0, i), ...this.state.cars.slice(j)]
     })
  };

  render() {
    return (
      <Segment.Group>
        <Segment>
          <h2>Choose Car</h2>
        </Segment>
        <Segment placeholder>
          {/* <CarList cars={this.state.cars} /> */}
          <CarList
            cars={this.state.cars}
            selected={this.state.selected}
            handleClick={this.handleClick}
            deleteCar={this.deleteCar}
          />
        </Segment>
        <Segment>
          <NewCarButton />
        </Segment>
      </Segment.Group>
    );
  }
}

export default CarContainer;
