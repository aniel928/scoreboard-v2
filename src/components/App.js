import AddPlayerForm from './AddPlayerForm';
import Header from './Header';
import Player from './Player';
import React from 'react';

const App = () => {
    const [players, setPlayers] = React.useState([
        {
            id: 1,
            name: "Anne",
            score: 0,
        },
        {
            id: 2,
            name: "Shaun",
            score: 0,
        },
        {
            id: 3,
            name: "Max",
            score: 0,
        },
        {
            id: 4,
            name: "Cats",
            score: 0,
        }
    ]);

    const [nextPlayerId, setNextPlayerId] = React.useState(5);

    const handleAddPlayer = (name) => {
        setPlayers(prevPlayers => [
            ...prevPlayers,
            {
                name,
                score: 0,
                id: nextPlayerId
            }
        ]);

        setNextPlayerId(prevId => prevId + 1);
    }

    const handleRemovePlayer = (id) => {
        setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== id));
    }

    const handleScoreChange = (playerId, delta) => {
        setPlayers(prevPlayers => prevPlayers.map(player => {
            if (player.id === playerId) {
                return {
                    name: player.name,
                    score: player.score + delta,
                    id: player.id,
                }
            }

            return player;
        }));
    }

    return (
        <div className="scoreboard">
            <Header
                title="Scoreboard"
                players={players}
            />

            {/* Players list */}
            {players.map(player =>
                <Player
                    id={player.id}
                    key={player.id.toString()}
                    name={player.name}
                    removePlayer={handleRemovePlayer}
                    score={player.score}
                    changeScore={handleScoreChange}
                />
            )}

            <AddPlayerForm
                addPlayer={handleAddPlayer}
            />
        </div>
    );

}

export default App;
