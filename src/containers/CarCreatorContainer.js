import React from "react";
import CarImageContainer from "./CarImageContainer";
import CarStatsContainer from "./CarStatsContainer";
import MakeCarButton from "../components/MakeCarButton";
import { Segment, Grid, Divider } from "semantic-ui-react";
import Navbar from "../components/Navbar";

class CarCreatorContainer extends React.Component {

    state = {
        car: null
    }

    renderCarStats = (car) => {
        // this.setState({ car: car })
        this.setState({ car })
    }

  render() {
    return (
      <div className="page-container">
        <Navbar active="create" />
        <Segment.Group>
          <Segment id="car-creator-top">
            <Grid columns={2} textAlign="center">
              <Grid.Row verticalAlign="middle">
                <Grid.Column>
                  <CarImageContainer
                    renderCarStats={this.renderCarStats}
                  />
                </Grid.Column>
                <Divider vertical />
                <Grid.Column>
                  <CarStatsContainer car={this.state.car} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment textAlign="center">
            <MakeCarButton />
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}

export default CarCreatorContainer;
