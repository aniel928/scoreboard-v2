const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header >
    )
};

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                <button
                    className="remove-player"
                    onClick={() => { props.removePlayer(props.id) }}
                >✖</button>
                {props.name}
            </span>

            <Counter />
        </div>
    )
}

const Counter = () => {
    const [score, setScore] = React.useState(0);
    const handleDecrementScore = () => {
        // this.setState(prevState => {
        //     return {
        //         score: prevState.score - 1
        //     }
        // });
        setScore(prevScore => prevScore - 1);
    }

    const handleIncrementScore = () => {
        // this.setState(prevState => {
        //     return {
        //         score: prevState.score + 1
        //     }
        // });
        setScore(prevScore => prevScore + 1);
    }

    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => handleDecrementScore()}> - </button>
            <span className="counter-score"> {score} </span>
            <button className="counter-action increment" onClick={() => handleIncrementScore()}> + </button>
        </div>
    )
}

const App = () => {
    const [players, setPlayers] = React.useState([
        { id: 1, name: "Anne" },
        { id: 2, name: "Shaun" },
        { id: 3, name: "Max" },
        { id: 4, name: "Cats" }
    ]);

    const handleRemovePlayer = (id) => {
        setPlayers(prevPlayers => prevPlayers.filter(player => {
            return player.id !== id
        }))
    }

    return (
        <div className="scoreboard">
            <Header
                title="Scoreboard"
                totalPlayers={players.length}
            />
            {players.map((player, index) => {
                return <Player
                    id={player.id}
                    key={index.toString()}
                    name={player.name}
                    removePlayer={handleRemovePlayer}
                />
            })}

        </div>
    )
}


// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);