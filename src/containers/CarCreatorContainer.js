import React from 'react';
import CarImageContainer from './CarImageContainer'
import CarStatsContainer from './CarStatsContainer'
import MakeCarButton from '../components/MakeCarButton'

class CarCreatorContainer extends React.Component {

    render() {
        return (

            <div>
                <CarImageContainer />
                <CarStatsContainer />
                <MakeCarButton />
            </div>
        )
    }
}

export default CarCreatorContainer;