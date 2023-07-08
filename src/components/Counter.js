import React from 'react';

const Counter = ({ score, playerId, changeScore }) => {
    return (
        <div className="counter">
            <button
                className="counter-action decrement"
                onClick={() => changeScore(playerId, -1)}
            > - </button>
            <span className="counter-score">{score}</span>
            <button
                className="counter-action increment"
                onClick={() => changeScore(playerId, 1)}
            > + </button>
        </div>
    );

}
export default Counter;