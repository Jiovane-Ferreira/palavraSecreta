// CSS
import './App.css';

// Data
import { wordlist } from './data/data';

//React
import { useState, useCallback, useEffect } from 'react';

// Components
import StartScreen from './components/StartScreen';

const stage = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
];


function App() {

  const [gameStage, setGameStage] = useState(stage[0].name);

  return (
    <div className="App">

      {gameStage === 'start' && <StartScreen />};
      {gameStage === 'game' && <StartScreen />};
      {gameStage === 'end' && <StartScreen />};
            
    </div>
  );
}

export default App;
