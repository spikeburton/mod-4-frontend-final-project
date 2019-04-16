import React, { Component } from "react";
import { Segment, Form, Grid, Image } from "semantic-ui-react";

class CarStats extends Component {

  render() {
      const { car, stats, handleChange, handleDoubleClick } = this.props
    return (
      <Segment as={Form} id="car-stats-form">
        <Grid columns={2}>
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Image src={car ? require(`../images/cars${car.right}`) : null }/>
            </Grid.Column>
            <Grid.Column>
              <Form.Input
                label={`Max Fuel: ${stats.max_fuel}`}
                name="max_fuel"
                type="range"
                min={0}
                max={100}
                value={stats.max_fuel}
                onChange={handleChange}
                onDoubleClick={handleDoubleClick}
              />
              <Form.Input
                label={`Tread Wear: ${stats.tread_wear}`}
                name="tread_wear"
                type="range"
                min={0}
                max={100}
                value={stats.tread_wear}
                onChange={handleChange}
                onDoubleClick={handleDoubleClick}
              />
              <Form.Input
                label={`Health: ${stats.health}`}
                name="health"
                type="range"
                min={0}
                max={100}
                value={stats.health}
                onChange={handleChange}
                onDoubleClick={handleDoubleClick}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default CarStats;
