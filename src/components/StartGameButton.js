import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const StartGameButton = () => {
  return (
    <Link to="/game">
      <Button>
        Start Game
      </Button>
    </Link>
  );
};

export default StartGameButton;
