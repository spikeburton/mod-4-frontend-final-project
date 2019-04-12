import React from 'react';

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
                <div>
                    <img className="city-map" alt="pic" src={this.getImage()} />
                </div>
            </div>
        )
    }
}

export default Map;