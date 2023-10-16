import { useState } from 'react';
import './App.css';
import GameBoard from './GameBoard';
import WordSelect from './WordSelect';

function App() {  
  const [secretWord, setSecretWord] = useState('');
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="App">
      <h1>Welcome to Hangman!</h1>
      <p>Do you want to play game?</p>
      <div>
        {isShown ? (
          <GameBoard secretWord={secretWord} maxError={6}/>
          ) : (
          <WordSelect wordSelected={val => {
            setSecretWord(val);
            setIsShown(true);
          }}/>
          )
        }
      </div>
    </div>
  );
}

export default App;
