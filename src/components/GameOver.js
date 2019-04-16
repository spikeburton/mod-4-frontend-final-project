import React from 'react';
import { Modal, Button, Icon, Header } from "semantic-ui-react";
import { Link } from "react-router-dom"

class GameOver extends React.Component {

    render() {
        return (
          <div>
            <Modal
              open={this.props.gameOver}
              basic
              size="small"
            >
              <Header icon="archive" content="GAME OVER" />
              <Modal.Content>
                <p>
                  Would you like to play again?
                </p>
              </Modal.Content>
              <Modal.Actions>
                <Link to="/">
                <Button basic color="red" inverted >
                  <Icon name="remove" /> No
                </Button>
                </Link>
                <Button color="green" inverted onClick={console.log("newGame")}>
                  <Icon name="checkmark" /> Yes
                </Button>
              </Modal.Actions>
            </Modal>
          </div>
        );
    }
}

export default GameOver;