import React from "react";
import Map from "../components/Map";

class MapContainer extends React.Component {
  render() {
    return <Map car={this.props.car} />;
  }
}

export default MapContainer;
