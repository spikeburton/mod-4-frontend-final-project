import React from 'react';
import ScoreBoardContainer from "./ScoreBoardContainer"
import CarContainer from "./CarContainer"
import StartGameButton from "../components/StartGameButton"

class GameLoader extends React.Component {

    render() {
        return (
            <div>
                <ScoreBoardContainer />
                <CarContainer />
                <StartGameButton />
            </div>
        )
    }
}

export default GameLoader;