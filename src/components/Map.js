import React from 'react';
import { Image, Container } from "semantic-ui-react";

class Map extends React.Component {

    getImage = () => {
        // let mapPic = require(`../images/map1.jpg`);
        // let mapPic = require(`../images/map2.jpg`);
        let mapPic = require(`../images/map3.jpg`);
        // let mapPic = require(`../images/map4.jpg`);
        // let mapPic = require(`../images/map5.jpg`);
        // let mapPic = require(`../images/map6.jpg`);
        return mapPic
    }

    render() {
        return (
          <div>
            <Container>
              <Image
                className="city-map"
                alt="pic"
                src={this.getImage()}
                fluid
              />
            </Container>
          </div>
        );
    }
}

export default Map;