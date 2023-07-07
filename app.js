const players = [
    {
        name: "Anne",
        score: 50
    },
    {
        name: "Shaun",
        score: 85
    },
    {
        name: "Max",
        score: 95
    },
    {
        name: "Cats",
        score: 80
    }
];

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
                {props.name}
            </span>

            <Counter
                score={props.score}
            />
        </div>
    )
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score"> {props.score} </span>
            <button className="counter-action increment"> + </button>
        </div>
    )
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header
                title="Scoreboard"
                totalPlayers={props.initialPlayers.length}
            />
            {props.initialPlayers.map((player, index) => {
                return < Player
                    key={index.toString()}
                    name={player.name}
                    score={player.score}
                />
            })}

        </div>
    )
}


ReactDOM.render(
    <App initialPlayers={players} />,
    document.getElementById('root')
);