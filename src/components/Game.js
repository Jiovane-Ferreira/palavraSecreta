import "./Game.css";

const Game = ({ verifyLetter }) => {
    return (
    <div className="game_container">
        <p className="points"><span>Pontuação: 000</span></p>
        <h1>Adivinhe a Palavra</h1>
        <h3 className="tips">Dica sobre a palavra: <span>Dica.. vai aqui</span></h3>

        <div className="word_container">
            <span className="letter">A</span>
            <span className="blank_square"></span>
        </div>

        <div className="letter_container">
            <p>Tente adivinhar uma letra da palavra: </p>
            <form>
                <input type="text" name="letter" maxLength={1} required/>
                <button>Jogar!</button>
            </form>
        </div>
        <div className="wrong_letters">
            <p>Letras já uttilizadas</p>
            <span>a, </span>
            <span>b, </span>
        </div>
    </div>
    )
}

export default Game;