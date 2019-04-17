import React from "react";
import CarImageContainer from "./CarImageContainer";
import CarStatsContainer from "./CarStatsContainer";
import MakeCarButton from "../components/MakeCarButton";
import { Segment, Grid, Divider } from "semantic-ui-react";
import Navbar from "../components/Navbar";
import { API } from "../data";

const DEFAULT_STATS = {
  max_fuel: 50,
  tread_wear: 50,
  health: 50
};

class CarCreatorContainer extends React.Component {
  state = {
    stats: DEFAULT_STATS,
    car: null
  };

  renderCarStats = car => {
    // this.setState({ car: car })
    this.setState({
      car: car,
      stats: {
        max_fuel: car.max_fuel,
        tread_wear: car.tread_wear,
        health: car.health
      }
    });
  };

  handleChange = e => {
    //   console.log(typeof(e.target.value))
    //   console.log(e.target.value)
    this.setState({
      stats: {
        ...this.state.stats,
        [e.target.name]: parseInt(e.target.value)
      }
    });
  };

  handleDoubleClick = e => {
    this.setState({
      stats: {
        ...this.state.stats,
        [e.target.name]: this.state.car[e.target.name]
      }
    });
  };

  createCar = () => {
    const { car, stats } = this.state;

    const carObj = {
      user_id: parseInt(localStorage.getItem("user")),
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
    })
    .then(this.props.history.push("/"));
  };

  render() {
    return (
      <div className="page-container">
        <Navbar active="create" />
        <Segment.Group>
          <Segment id="car-creator-top">
            <Grid columns={2} textAlign="center">
              <Grid.Row verticalAlign="middle">
                <Grid.Column>
                  <CarImageContainer renderCarStats={this.renderCarStats} />
                </Grid.Column>
                <Divider vertical />
                <Grid.Column>
                  <CarStatsContainer
                    car={this.state.car}
                    stats={this.state.stats}
                    handleChange={this.handleChange}
                    handleDoubleClick={this.handleDoubleClick}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment textAlign="center">
            <MakeCarButton car={this.state.car} handleClick={this.createCar} />
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}

export default CarCreatorContainer;
