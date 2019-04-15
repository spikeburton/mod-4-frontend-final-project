import React from "react";
import { Segment, Grid, Divider, Container } from "semantic-ui-react";

import MapContainer from "./MapContainer";
import RealTimeGameStatsContainer from "./RealTimeGameStatsContainer";
import PointLog from "../components/PointLog";

import { GAME_WIDTH, GAME_HEIGHT, CAR_WIDTH, CAR_HEIGHT } from "../data";


import "../stylesheets/GameContainer/GameContainer.css";

class GameContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      car: {
        x: 292,
        y: 0
      },
      boundaries: []
    };
  }

  handleCarMove = e => {
    const keys = {
      left: 37,
      up: 38,
      right: 39,
      down: 40
    };
    const pos = {
      x: this.state.car.x,
      y: this.state.car.y
    };
    const px = 5;

    if (Object.values(keys).includes(e.which)) {
      e.preventDefault();

      switch (e.which) {
        case keys.left:
          pos.x -= px;
          break;
        case keys.right:
          pos.x += px;
          break;
        case keys.up:
          pos.y += px;
          break;
        case keys.down:
          pos.y -= px;
          break;
        default:
          console.error("WTF HAPPENED LOL");
      }
      if (this.checkCollision(pos.x, pos.y)) {
        console.log("theres been a collision");
      } else if (!this.checkInBounds(pos.x, pos.y)) {
        console.log("Don't go drivin' there partner!");
      } else {
        this.setState({
          car: {
            ...this.state.car,
            x: pos.x,
            y: pos.y
          }
        });
      }
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleCarMove);
    const bumperDivs = document.querySelectorAll(".grass-building");
    console.log(bumperDivs);
    let divObjects = [];
    bumperDivs.forEach(div => {
      let divObjStyle = {
        bottom: div.style.bottom,
        left: div.style.left,
        width: div.style.width,
        height: div.style.height
      };
      Object.keys(divObjStyle).map(function(key, i) {
        divObjStyle[key] = parseInt(divObjStyle[key].split("px")[0]);
      });
      divObjects.push(divObjStyle);
    });
    this.setState({ boundaries: divObjects });
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleCarMove);
  }

  checkCollision = (x, y) => {
    for (let div of this.state.boundaries) {
      if (
        div.left < x + CAR_WIDTH &&
        div.left + div.width > x &&
        div.bottom < y + CAR_HEIGHT &&
        div.height + div.bottom > y
      ) {
        return true;
      }
    }
    return false;
  };

  checkInBounds = (x, y) => {
      if (
          x > 0 &&
          x < GAME_WIDTH - CAR_WIDTH &&
          y > 0 &&
          y < GAME_HEIGHT - CAR_HEIGHT
      ) {
          return true
      } else {
          return false
      }
  }

  render() {
    return (
      <Segment.Group id="game-container">
        <div id="game-container-top">
          <MapContainer car={this.state.car} />
        </div>
        <Segment id="stats-log-container">
          <Grid columns={2} textAlign="center">
            <Divider id="stats-log-divider" vertical />
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <RealTimeGameStatsContainer />
              </Grid.Column>
              <Grid.Column>
                <PointLog />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Segment.Group>
    );
  }
}

export default GameContainer;
