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
        <div className="aura" style={{ background: "yellow", boxShadow: "0px 0px 7px 7px rgba(255, 255, 190, 0.75)" }} />
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
        <div className="aura" style={{ background: "red", boxShadow: "0px 0px 7px 7px rgba(255, 0, 0, 0.75)" }} />
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
        <div className="aura" style={{ background: "orange", boxShadow: "0px 0px 7px 7px rgba(255, 165, 0, 0.75)" }} />
        <img src={require("../images/mechanic.png")} alt="" />
      </div>
    </Fragment>
  );
};

export default Buffs;
