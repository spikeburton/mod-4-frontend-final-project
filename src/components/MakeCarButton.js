import React from "react";
import { Button } from "semantic-ui-react";

class MakeCarButton extends React.Component {
  render() {
    const { car } = this.props;

    return (
      <div>
        {car ? (
          <Button onClick={this.props.handleClick}>Create Car</Button>
        ) : (
          <Button disabled>Create Car</Button>
        )}
      </div>
    );
  }
}

export default MakeCarButton;
