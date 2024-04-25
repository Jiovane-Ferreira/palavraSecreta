import { useState, useRef } from "react";
import "./Game.css";

const Game = ({ 

        verifyLetter, 
        secretWord, 
        pickedCategory,
        letters,
        guessedLetters,
        wrongLetters,
        guesses,
        score  
    
    }) => {

    const [letra, setLetra] = useState("");
    const letraInputRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();
        verifyLetter(letra);
        setLetra("");
        letraInputRef.current.focus();

    }

    return (

    <div className="game_container">
        
        <p className="points"><span>Pontuação: {score} </span></p>
        <h1>Adivinhe a Palavra</h1>
        <h3 className="tips">Dica sobre a palavra: <span>{pickedCategory}</span></h3>
        <p>Você ainda possui {guesses} tentativas restantes!</p>
       
        <div className="word_container">

            {letters.map((letra, indice) => 
              
              guessedLetters.includes(letra) ? (

                    <span key={indice} className="letter">{letra}</span>
                    
                ) : (
                    <span key={indice} className="blank_square"></span>
                ) 
            )}
        </div>

        <div className="letter_container">
            <p>Tente adivinhar uma letra da palavra: </p>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="letter" 
                    maxLength={1} 
                    required onChange={(event) => setLetra(event.target.value)} 
                    value={letra}
                    ref={letraInputRef}
                    />
                <button>Jogar!</button>
            </form>
        </div>
        <div className="wrong_letters">
            <p>Letras já uttilizadas</p>

            {wrongLetters.map((letra, i) => (
                <span key={i}>{letra}, </span>
            ))}

        </div>
    </div>
    )
}

export default Game;