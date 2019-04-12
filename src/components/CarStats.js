import React from "react";
import { Segment, Form } from "semantic-ui-react";

class CarStats extends React.Component {
  render() {
    return (
      <Segment as={Form} id="car-stats-form">
        {/* <form>this is a form</form> */}
        <Form.Input
          label="Max Fuel:"
          name="max_fuel"
          type="range"
          min={0}
          max={100}
        />
      </Segment>
    );
  }
}

export default CarStats;
