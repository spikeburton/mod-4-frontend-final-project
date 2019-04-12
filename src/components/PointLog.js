import React from 'react';
import { Segment } from "semantic-ui-react";

class PointLog extends React.Component {

    render() {
        return (
          <div>
            <Segment.Group horizontal>
              <Segment color="green">Point Log</Segment>
            </Segment.Group>
          </div>
        );
    }
}

export default PointLog;