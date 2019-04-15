import React from "react";
import Car from "./Car";
import Boundaries from "./Boundaries"
import "../stylesheets/GameContainer/Map.css";
// import "../stylesheets/GameContainer/GameContainer.css";
// import { mapPic3 } from "../data.js";

class Map extends React.Component {
  render() {
    return (
      <div id="map-container">
        <Boundaries />
        <Car {...this.props.car} />
      </div>
    );
  }
}

export default Map;
