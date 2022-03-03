import React, {useState} from 'react'
import GameOver from './components/GameOver'

function MemoryGame(){
  const [gameOver, setGameOver] = useState(false)

  function restart(){
    setGameOver(false)
  }



  return(
    <div>
      <h1>Jogo da memoria</h1>
      <GameOver handleRestart={restart} show={gameOver}></GameOver>
    </div>
  )
}


export default MemoryGame