import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
    return (
        <div className="start_container">
            <h1>Palavra Secreta</h1>
            <p>Clique no botão abaixo para começar a jogar</p>
            <button onClick={startGame}>Começar Jogo</button>
        </div>
    )
}

export default StartScreen;