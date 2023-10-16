import ButtonGrid from "./ButtonGrid";
import LetterGrid from "./LetterGrid";

const GameBoard = ({secretWord}) => {
  const letterGuessedHandler = () => {

  }

  return(
    <>
      <LetterGrid secretWord={secretWord} guessedLetters={['r', 'e']}/>
      <ButtonGrid letterGuessed={letterGuessedHandler}/>
    </>
  )
}

export default GameBoard;