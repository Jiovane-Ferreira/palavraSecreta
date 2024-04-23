import "./Game.css";

const Game = ({ verifyLetter }) => {
    return (
        <div>
            <h1>Aqui vai rolar o jogo</h1>
            <button onClick={verifyLetter}>Fim de Jogo</button>
        </div>
    )
}

export default Game;