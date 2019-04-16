import React, { Component } from "react";
import { Segment, Form, Grid, Image } from "semantic-ui-react";

const DEFAULT_STATS = {
  max_fuel: 50,
  tread_wear: 50,
  health: 50
};

class CarStats extends Component {

  state = {
      car: null
  }
  

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDoubleClick = e => {
    this.setState({
      [e.target.name]: DEFAULT_STATS[e.target.name]
    });
  };

  render() {
      const { car } = this.props
    return (
      <Segment as={Form} id="car-stats-form">
        <Grid columns={2}>
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Image src="http://images.clipartpanda.com/car-top-view-clipart-red-racing-car-top-view-fe3a.png" />
            </Grid.Column>
            <Grid.Column>
              <Form.Input
                label={`Max Fuel: ${this.state.max_fuel}`}
                name="max_fuel"
                type="range"
                min={0}
                max={100}
                value={car ? car.max_fuel : DEFAULT_STATS.max_fuel}
                onChange={this.handleChange}
                onDoubleClick={this.handleDoubleClick}
              />
              <Form.Input
                label={`Tread Wear: ${this.state.tread_wear}`}
                name="tread_wear"
                type="range"
                min={0}
                max={100}
                value={car ? car.tread_wear : DEFAULT_STATS.tread_wear}
                onChange={this.handleChange}
                onDoubleClick={this.handleDoubleClick}
              />
              <Form.Input
                label={`Health: ${this.state.health}`}
                name="health"
                type="range"
                min={0}
                max={100}
                value={car ? car.health : DEFAULT_STATS.health}
                onChange={this.handleChange}
                onDoubleClick={this.handleDoubleClick}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default CarStats;
