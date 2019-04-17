import React, { Fragment } from "react";

const Buffs = () => {
  return (
    <Fragment>
      <div
        className="gasStation"
        style={{
          bottom: "288px",
          left: "671px",
          width: "92px",
          height: "69px"
        }}
      >
        <img src={require("../images/gas-pump.png")} alt="" />
      </div>
      <div
        className="hospital"
        style={{
          bottom: "110px",
          left: "23px",
          width: "92px",
          height: "85px"
        }}
      >
        <img src={require("../images/red-cross.png")} alt="" />
      </div>
      <div
        className="tireShop"
        style={{
          bottom: "412px",
          left: "393px",
          width: "67px",
          height: "39px"
        }}
      >
        <img src={require("../images/mechanic.png")} alt="" />
      </div>
    </Fragment>
  );
};

export default Buffs;
