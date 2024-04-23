import "./EndGame.css";

const EndGame = ({ retry }) => {
    return (
        <div>
            <h1>Game Over</h1>
            <button onClick={retry}>Jogar Novamente</button>
        </div>
    )
}

export default EndGame;