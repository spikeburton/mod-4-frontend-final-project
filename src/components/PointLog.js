import React from "react";
import { Segment } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins  } from "@fortawesome/free-solid-svg-icons";
import "../stylesheets/GameContainer/GameContainer.css";

class PointLog extends React.Component {

    showAllLogs = () => {
        return this.props.logs.map((log, i) => {
            return <p key={i} className={log.type}>{log.msg}</p>
        })
    }

    // <pre>{showAllLogs()}</pre>
  render() {
    return (
      <Segment.Group horizontal>
        <Segment color="yellow">
          <FontAwesomeIcon icon={faCoins} size="sm" />
          {`Points: ${this.props.points}`}
        </Segment>
        <Segment className="HQComps" id="logPanel" color="yellow">
            {this.showAllLogs()}
            {null}
          </Segment>
      </Segment.Group>
    );
  }
}

export default PointLog;
