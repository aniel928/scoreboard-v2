import Counter from './Counter'
import React from 'react';

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
                {props.name}
            </span>

            <Counter
                playerId={props.id}
                score={props.score}
                changeScore={props.changeScore}
            />
        </div>
    );
}

export default Player;