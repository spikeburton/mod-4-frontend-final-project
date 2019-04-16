import React from "react";
import CarImageContainer from "./CarImageContainer";
import CarStatsContainer from "./CarStatsContainer";
import MakeCarButton from "../components/MakeCarButton";
import { Segment, Grid, Divider } from "semantic-ui-react";
import Navbar from "../components/Navbar";

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
    this.setState({
      stats: {
          ...this.state.stats,
          [e.target.name]: e.target.value
      }
    });
  };

  handleDoubleClick = e => {
    this.setState({
      [e.target.name]: DEFAULT_STATS[e.target.name]
    });
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
            <MakeCarButton car={this.state.car} stats={this.state.stats} />
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}

export default CarCreatorContainer;
