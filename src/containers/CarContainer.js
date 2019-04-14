import React, { Component } from "react";
import CarList from "../components/CarList";
import NewCarButton from "../components/NewCarButton";
import { API } from "../data";
import { Segment } from "semantic-ui-react";

class CarContainer extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     cars: []
  //   };
  // }

  // componentDidMount() {
  //   fetch(`${API}/cars`)
  //     .then(response => response.json())
  //     .then(cars => this.setState({ cars }));
  // }

  render() {
    return (
      <Segment.Group>
        <Segment>
          <h2>Choose Car</h2>
        </Segment>
        <Segment placeholder>
          {/* <CarList cars={this.state.cars} /> */}
          <CarList cars={this.props.cars} />
        </Segment>
        <Segment>
          <NewCarButton />
        </Segment>
      </Segment.Group>
    );
  }
}

export default CarContainer;
