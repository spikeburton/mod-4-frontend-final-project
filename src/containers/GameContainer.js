import React from "react";
import { Segment, Grid, Divider } from "semantic-ui-react";

import MapContainer from "./MapContainer";
import RealTimeGameStatsContainer from "./RealTimeGameStatsContainer";
import PointLog from "../components/PointLog";
import GameOver from "../components/GameOver";

import { GAME_WIDTH, GAME_HEIGHT, CAR_WIDTH, CAR_HEIGHT, API } from "../data";

import "../stylesheets/GameContainer/GameContainer.css";
import Navbar from "../components/Navbar";

class GameContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      car: {
        x: 302,
        y: 1,
        stats: null,
        data: null
      },
      moves: 0,
      boundaries: [],
      buffLocations: [],
      auraActive: false,
      canActivateAura: true,
      gameActive: false,
      gameOver: false,
      points: 0,
      finalPoints: 0,
      pointTimerOn: false,
      start: 0,
      logs: []
    };
  }

  startPointsTimer() {
    this.setState({
      pointTimerOn: true,
      points: this.state.points,
      start: Date.now() - this.state.points
    });
    this.timer = setInterval(
      () =>
        this.setState({
          points: Date.now() - this.state.start
        }),
      100
    );
  }

  stopPointsTimer() {
    this.setState({ points: 0, pointTimerOn: false, start: 0 });
    clearInterval(this.timer);
  }

  setBoundaries = () => {
    const bumperDivs = document.querySelectorAll(".grass-building");
    let divObjects = [];
    bumperDivs.forEach(div => {
      let divObjStyle = {
        bottom: div.style.bottom,
        left: div.style.left,
        width: div.style.width,
        height: div.style.height
      };
      Object.keys(divObjStyle).map(function(key, i) {
        return (divObjStyle[key] = parseInt(divObjStyle[key].split("px")[0]));
      });
      divObjects.push(divObjStyle);
    });
    this.setState({ boundaries: divObjects });
  };

  setBuffLocations = () => {
    const hospital = document.querySelector(".hospital");
    const tireShop = document.querySelector(".tireShop");
    const gasStation = document.querySelector(".gasStation");
    let buffs = [hospital, tireShop, gasStation];
    buffs = buffs.map(div => {
      const attributes = {
        bottom: div.style.bottom,
        left: div.style.left,
        width: div.style.width,
        height: div.style.height
      };
      for (let i in attributes) {
        attributes[i] = parseInt(attributes[i].split("px")[0]);
      }
      return { ...attributes, className: div.className };
    });
    this.setState({ buffLocations: buffs });
    // console.log(buffs);
  };

  getCarData = () => {
    return fetch(`${API}/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(response => response.json())
      .then(payload => {
        const data = payload.user.cars.find(
          car => car.id === parseInt(localStorage.getItem("car"))
        );
        // console.log(data)
        this.setState({
          car: {
            ...this.state.car,
            stats: {
              fuel: data.max_fuel,
              tread: data.tread_wear,
              health: data.health
            },
            data: data
          }
        });
      });
  };

  handleCarMove = e => {
    if (!this.state.gameActive) return false;

    window.requestAnimationFrame(() => {
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
          let health = this.state.car.stats.health;
          health -= 10;
          this.setState({
            car: {
              ...this.state.car,
              stats: {
                ...this.state.car.stats,
                health: health
              }
            }
          });
          if (health === 0) this.gameOver();
        } else if (!this.checkInBounds(pos.x, pos.y)) {
          console.log("Don't go drivin' there partner!");
        } else {
          let moves = this.state.moves;
          let decreaseTread = false;
          let tread = this.state.car.stats.tread;

          moves += 1;
          if (moves % 10 === 0) decreaseTread = true;
          tread = decreaseTread ? tread - 1 : tread;

          if (!this.state.auraActive) this.checkInAura(pos.x, pos.y);

          this.setState({
            car: {
              ...this.state.car,
              x: pos.x,
              y: pos.y,
              stats: {
                ...this.state.car.stats,
                tread: tread
              }
            },
            moves: moves
          });
          if (tread === 0) this.gameOver();
        }
      }
    });
  };

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
      return true;
    } else {
      return false;
    }
  };

  checkInAura = (x, y) => {
    for (let div of this.state.buffLocations) {
      if (
        div.left < x + CAR_WIDTH &&
        div.left + div.width > x &&
        div.bottom < y + CAR_HEIGHT &&
        div.height + div.bottom > y
      ) {
        console.log(`hit aura: ${div.className}`);
        if (this.state.canActivateAura) this.setAura(div.className);
        return true;
      }
    }
    return false;
  };

  setAura = name => {
    // Set aura status to active
    this.setState({ auraActive: true });
    this.buffTimer = setInterval(() => {
      switch (name) {
        case "hospital":
          console.log("health buff active");
          let health = this.state.car.stats.health;
          health += 2;
          this.updateCarStats("health", health);
          break;
        case "tireShop":
          console.log("tread buff active");
          let tread = this.state.car.stats.tread;
          tread += 10;
          this.updateCarStats("tread", tread);
          break;
        case "gasStation":
          console.log("fuel buff active");
          let fuel = this.state.car.stats.fuel;
          fuel += 6;
          this.updateCarStats("fuel", fuel);
          break;
        default:
          console.error("THIS SHOULD NOT RUN");
          break;
      }
    }, 1000);

    // find the aura by class name and set the opacity to show user it is active
    const aura = document.querySelector(`.${name}`).querySelector(".aura");
    aura.style.opacity = 0.4;

    // Set amount of time aura is active, and then deactive aura buffs
    window.setTimeout(() => {
      aura.style.opacity = 0;
      window.clearInterval(this.buffTimer);

      // After aura has been deactivated, do not allow player to activate again
      // for 15 seconds
      this.setState({ auraActive: false, canActivateAura: false });
      window.setTimeout(() => {
        this.setState({ canActivateAura: true });
      }, 15000);
    }, 4000);
  };

  updateCarStats = (stat, value) => {
    this.setState({
      car: {
        ...this.state.car,
        stats: {
          ...this.state.car.stats,
          [stat]: value
        }
      }
    });
  };

  saveScore = () => {
    const score = {
      user_id: parseInt(localStorage.getItem("user")),
      car_id: parseInt(localStorage.getItem("car")),
      points: this.state.points
    };

    return fetch(`${API}/scores`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(score)
    });
  };

  startGame = () => {
    console.log("game started");
    this.startPointsTimer();
    document.addEventListener("keydown", this.handleCarMove);
    this.setState({ gameActive: true, gameOver: false, finalPoints: 0 });
    this.getCarData().then(() => {
      this.fuel = window.setInterval(() => {
        let fuel = this.state.car.stats.fuel;
        this.setState({
          car: {
            ...this.state.car,
            stats: {
              ...this.state.car.stats,
              fuel: (fuel -= 1)
            }
          }
        });
        if (fuel === 0) this.gameOver();
      }, 1000);
    });
  };

  gameOver = () => {
    document.removeEventListener("keydown", this.handleCarMove);
    clearInterval(this.fuel);
    clearInterval(this.buffTimer);
    this.setState({
      gameActive: false,
      gameOver: true,
      finalPoints: this.state.points
    });
    this.saveScore();
    this.stopPointsTimer();
    // console.warn("YOU LOSE SUCKER");
  };

  componentDidMount() {
    this.setBoundaries();
    this.setBuffLocations();
    this.startGame();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleCarMove);
    clearInterval(this.fuel);
    clearInterval(this.timer);
    clearInterval(this.buffTimer);
  }

  logInitialStartLog = () => {
    const welcomeLog = Log.notify("");
    this.setState({ logs: [welcomeLog, ...this.state.logs] });
  };

  render() {
    return (
      <div id="game-container">
        <Navbar />
        <Segment.Group id="game-container">
          <div id="game-container-top">
            <MapContainer car={this.state.car} />
          </div>
          <Segment id="stats-log-container">
            <Grid columns={2} textAlign="center">
              <Divider id="stats-log-divider" vertical />
              <Grid.Row verticalAlign="middle">
                <Grid.Column>
                  <RealTimeGameStatsContainer stats={this.state.car.stats} />
                </Grid.Column>
                <Grid.Column>
                  <PointLog points={this.state.points} logs={this.state.logs} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Segment.Group>
        <GameOver
          gameOver={this.state.gameOver}
          startGame={this.startGame}
          finalPoints={this.state.finalPoints}
        />
      </div>
    );
  }
}

export default GameContainer;
