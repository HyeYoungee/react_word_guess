import { useState } from "react";
import ButtonGrid from "./ButtonGrid";
import LetterGrid from "./LetterGrid";

const GameBoard = ({secretWord}) => {
  const [guessedLetters, setGuessedLetters] = useState([]);

  const letterGuessedHandler = (letter) => {
    let val = letter.toLowerCase();

    setGuessedLetters(prev => [...prev, val]);


  }

  return(
    <>
      <LetterGrid secretWord={secretWord} guessedLetters={guessedLetters}/>
      <ButtonGrid letterGuessed={letterGuessedHandler}/>
    </>
  )
}

export default GameBoard;