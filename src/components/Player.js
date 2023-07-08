import Counter from './Counter'
import React from 'react';

const Player = ({ name, id, score, changeScore, removePlayer }) => {
    console.log(name);
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                {name}
            </span>

            <Counter
                playerId={id}
                score={score}
                changeScore={changeScore}
            />
        </div>
    );
}

const playerPropsAreEqual = (prevProps, nextProps) => {
    return prevProps.score === nextProps.score
}

// memo improves performance in large apps
export default React.memo(Player, playerPropsAreEqual);