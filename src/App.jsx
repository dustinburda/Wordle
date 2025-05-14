import { useState } from 'react'
import './Wordle.css'

const NUM_SQUARES = 30

function Title() {
  return (
    <>
      <div className="title-container">
          <h1>WORDLE</h1>
      </div>
      <hr />
    </>
  );
}

function Square() {
  const [character, setCharacter] = useState('A');

  return(
    <div className="square">
      {character}
    </div>
  );
}

function Grid() {
  const [currentSquare, setCurrentSquare] = useState(0);

  return (
    <div className="grid-container">
      <div className="grid">
        { Array(NUM_SQUARES).fill(0).map(_ => (<Square/>))}
      </div>
    </div>
  );
}

function App() {

  return (
    <>
      <Title></Title>
      <Grid></Grid>
    </>
  )
}

export default App
