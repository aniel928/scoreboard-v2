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

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            score: 0,
        };

        this.handleDecrementScore = this.handleDecrementScore.bind(this);
        this.handleIncrementScore = this.handleIncrementScore.bind(this);
    }

    // you can skip constructor and just declare state (outside of function inside the class) when using babble:
    // state = {
    //     score: 0
    // }

    handleDecrementScore() {
        this.setState(prevState => {
            return {
                score: prevState.score - 1
            }
        });
    }

    handleIncrementScore() {
        this.setState(prevState => {
            return {
                score: prevState.score + 1
            }
        });
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.handleDecrementScore}> - </button>
                <span className="counter-score"> {this.state.score} </span>
                <button className="counter-action increment" onClick={this.handleIncrementScore}> + </button>
            </div>
        )
    }
}

class App extends React.Component {
    state = {
        players: [
            { id: 1, name: "Anne" },
            { id: 2, name: "Shaun" },
            { id: 3, name: "Max" },
            { id: 4, name: "Cats" }
        ]
    };

    handleRemovePlayer = (id) => {
        this.setState(prevState => {
            return {
                players: prevState.players.filter(player => {
                    return player.id !== id
                })
            }
        })
    }

    render() {
        return (
            <div className="scoreboard">
                <Header
                    title="Scoreboard"
                    totalPlayers={this.state.players.length}
                />
                {this.state.players.map((player, index) => {
                    return < Player
                        id={player.id}
                        key={index.toString()}
                        name={player.name}
                        removePlayer={this.handleRemovePlayer}
                    />
                })}

            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);