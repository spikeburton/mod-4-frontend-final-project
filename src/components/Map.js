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
        <div
          className="grass-building"
          style={{
            bottom: "250px",
            left: "75px",
            width: "105px",
            height: "200px"
          }}
        />
        <div
          className="grass-building"
          style={{
            bottom: "412px",
            left: "324px",
            width: "70px",
            height: "39px"
          }}
        />
        <div
          className="grass-building"
          style={{
            bottom: "112px",
            left: "327px",
            width: "133px",
            height: "245px"
          }}
        />
        <div
          className="grass-building"
          style={{
            bottom: "248px",
            left: "235px",
            width: "93px",
            height: "109px"
          }}
        />
        <div
          className="grass-building"
          style={{
            bottom: "250px",
            left: "512px",
            width: "105px",
            height: "201px"
          }}
        />
        <div
          className="grass-building"
          style={{
            bottom: "250px",
            left: "671px",
            width: "92px",
            height: "39px"
          }}
        />
        <div
          className="grass-building"
          style={{
            bottom: "112px",
            left: "459px",
            width: "94px",
            height: "82px"
          }}
        />
        <div
          className="grass-building"
          style={{
            bottom: "411px",
            left: "179px",
            width: "93px",
            height: "39px"
          }}
        />
        <div
          className="grass-building"
          style={{
            bottom: "112px",
            left: "762px",
            width: "37px",
            height: "245px"
          }}
        />
        <div
          className="grass-building"
          style={{
            bottom: "410px",
            left: "762px",
            width: "37px",
            height: "41px"
          }}
        />
        <div
          className="grass-building"
          style={{
            bottom: "0px",
            left: "512px",
            width: "95px",
            height: "57px"
          }}
        />
        <div
          className="grass-building"
          style={{
            bottom: "0px",
            left: "761px",
            width: "37px",
            height: "58px"
          }}
        />
        <div
          className="grass-building"
          style={{
            bottom: "411px",
            left: "616px",
            width: "95px",
            height: "40px"
          }}
        />
        <div
          className="grass-building"
          style={{
            bottom: "0px",
            left: "606px",
            width: "104px",
            height: "194px"
          }}
        />
        <div
          className="grass-building"
          style={{
            bottom: "110px",
            left: "0px",
            width: "24px",
            height: "247px"
          }}
        />
        <div
          className="grass-building"
          style={{
            bottom: "0px",
            left: "75px",
            width: "96px",
            height: "57px"
          }}
        />
        <div
          className="grass-building"
          style={{
            bottom: "0px",
            left: "0px",
            width: "24px",
            height: "57px"
          }}
        />
        <div
          className="grass-building"
          style={{
            bottom: "410px",
            left: "0px",
            width: "24px",
            height: "40px"
          }}
        />
        <div
          className="hospital-tireShop-gasStation"
          style={{
            bottom: "288px",
            left: "671px",
            width: "92px",
            height: "69px"
          }}
        />
        <div
          className="hospital-tireShop-gasStation"
          style={{
            bottom: "110px",
            left: "23px",
            width: "92px",
            height: "85px"
          }}
        />
        <div
          className="hospital-tireShop-gasStation"
          style={{
            bottom: "412px",
            left: "393px",
            width: "67px",
            height: "39px"
          }}
        />
        <Car {...this.props.car} />
      </div>
    );
  }
}

export default Map;
