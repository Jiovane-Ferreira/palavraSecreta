// CSS
import './App.css';

// Data
import { wordlist } from './data/data';

//React
import { useState, useCallback, useEffect } from 'react';

// Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import EndGame from './components/EndGame';

const stage = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
];


function App() {

  const [gameStage, setGameStage] = useState(stage[0].name);
  const [palavras] = useState(wordlist);

   // pega a palavra secreta 
   const [secretWord, setSecretWord] = useState("");
   const [category, setCategory] = useState("");
   const [letters, setLetters] = useState([]); 

   function pickWordAndCategory() {

    const categories = Object.keys(palavras);

    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const palavra = palavras[category][Math.floor(Math.random() * palavras[category].length)];
    
    return {palavra, category}
  }
  

  // Inicia o jogo
  function startGame() {

    const { palavra, category } = pickWordAndCategory();
    setGameStage(stage[1].name);
    console.log(palavra, category);

  };

  // processa o input de letras
  
  const verifyLetter = () => {
    setGameStage(stage[2].name);

  }

  // reinicia o jogo
  const retry = () => {
    setGameStage(stage[0].name);
  }

 

  return (
    <div className="App">

      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <EndGame retry={retry} />}
      
    </div>
  );
}

export default App;
