import React from "react";
import Car from "./Car";
import "../stylesheets/GameContainer/Map.css";
// import "../stylesheets/GameContainer/GameContainer.css";
// import { mapPic3 } from "../data.js";

class Map extends React.Component {
  render() {
    return (
      <div id="map-container">
        <div
          className="grass-building"
          style={{
            bottom: "0px",
            left: "170px",
            width: "102px",
            height: "192px"
          }}
        />
        <div
          className="grass-building"
          style={{
            bottom: "0px",
            left: "327px",
            width: "131px",
            height: "55px"
          }}
        />
        <Car {...this.props.car} />
      </div>
    );
  }
}

export default Map;
