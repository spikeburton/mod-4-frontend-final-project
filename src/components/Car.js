import React from "react";

const Car = props => {
  return (
    <div id="car" style={{ bottom: `${props.y}px`, left: `${props.x}px` }}>
      <img
        src="https://cdn4.iconfinder.com/data/icons/race-cartoon/512/val42_2-128.png"
        alt="car"
      />
    </div>
  );
};

export default Car;
