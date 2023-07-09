import React from 'react';
import PropTypes from 'prop-types';

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

Counter.propTypes = {
    playerId: PropTypes.number.isRequired,
    score: PropTypes.number,
    changeScore: PropTypes.func.isRequired,
};

Counter.propTypes = {
    score: 0,
}

export default Counter;