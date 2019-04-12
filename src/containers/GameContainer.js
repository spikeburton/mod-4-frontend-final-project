import React from 'react';
import MapContainer from './MapContainer'
import RealTimeGameStatsContainer from './RealTimeGameStatsContainer'

class GameContainer extends React.Component {

    render() {
        return (

            <div>
                <MapContainer />
                <RealTimeGameStatsContainer />
            </div>
        )
    }
}

export default GameContainer;