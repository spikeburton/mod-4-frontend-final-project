import React from "react";
import { Segment } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins  } from "@fortawesome/free-solid-svg-icons";
import "../stylesheets/GameContainer/GameContainer.css";

class PointLog extends React.Component {

    showAllLogs = () => {
        return this.props.logs.map((log, i) => {
            return <div key={i} className={log.type}>{log.msg}</div>
        })
    }

  render() {
    return (
      <Segment.Group horizontal>
        <Segment color="yellow" style={{ padding: "10% 0%" }}>
          <FontAwesomeIcon icon={faCoins} size="sm" />
           {` Points:`} <p>{`${this.props.points}`}</p>
        </Segment>
        <Segment className="HQComps" id="logPanel" color="yellow">
          <pre>{this.showAllLogs()}</pre>
          {null}
        </Segment>
      </Segment.Group>
    );
  }
}

export default PointLog;
