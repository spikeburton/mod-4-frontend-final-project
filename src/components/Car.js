import React from "react";

const Car = props => {
  return (
    <div id="car" style={{ bottom: `${props.y}px`, left: `${props.x}px` }}>
      {props.data ? (
        <img
          src={require(`../images/cars${props.data.up}`)}
          alt="car"
        />
      ) : null}
    </div>
  );
};

export default Car;
