import React from 'react';
import MapContainer from './MapContainer'
import RealTimeGameStatsContainer from './RealTimeGameStatsContainer'
import PointLog from '../components/PointLog'

class GameContainer extends React.Component {

    render() {
        return (

            <div>
                <MapContainer />
                <RealTimeGameStatsContainer />
                <PointLog />
            </div>
        )
    }
}

export default GameContainer;