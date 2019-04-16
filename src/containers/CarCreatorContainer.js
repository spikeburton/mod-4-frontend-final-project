import React from "react";
import CarImageContainer from "./CarImageContainer";
import CarStatsContainer from "./CarStatsContainer";
import MakeCarButton from "../components/MakeCarButton";
import { Segment, Grid, Divider } from "semantic-ui-react";
import Navbar from "../components/Navbar";

class CarCreatorContainer extends React.Component {
  render() {
    return (
      <div className="page-container">
        <Navbar active="create" />
        <Segment.Group id="car-creator-container">
          <Segment id="car-creator-top">
            <Grid columns={2} textAlign="center">
              <Grid.Row verticalAlign="middle">
                <Grid.Column>
                  <CarImageContainer />
                </Grid.Column>
                <Divider vertical />
                <Grid.Column>
                  <CarStatsContainer />
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
