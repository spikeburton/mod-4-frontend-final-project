import React from "react";
import Car from "./Car";
// import "../stylesheets/GameContainer/GameContainer.css";
// import { mapPic3 } from "../data.js";

class Map extends React.Component {
  render() {
    return (
      <div id="map-container">
        {/* Car will go here */}
        <Car {...this.props.car} />
      </div>
    );
  }
}

export default Map;
