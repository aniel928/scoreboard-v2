import Counter from './Counter'
import React from 'react';
import PropTypes from 'prop-types';
import CrownIcon from './CrownIcon';

const Player = ({ name, id, isHighScore, score, changeScore, removePlayer }) => {
    console.log(name);
    return (
        <div className="player">
            <span className="player-name">
                <CrownIcon isHighScore={isHighScore} />
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
    return (
        prevProps.score === nextProps.score
        && prevProps.isHighScore === nextProps.isHighScore
    )
}

Player.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isHighScore: PropTypes.bool,
    score: PropTypes.number,
    changeScore: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired,
}

Player.defaultProps = {
    score: 0,
}

// memo improves performance in large apps
export default React.memo(Player, playerPropsAreEqual);