import React from 'react'

function GameOver({show,handleRestart}){
  return(
    <>
      {show === true && 
        <div id="gameOver">
          <div id="contentGameOver">
            <div>Parabens! Você completou o jogo</div>
            <button onClick={handleRestart} class="restart">Jogar novamente</button>
          </div>
      </div>
      }
    </>
  )
}

export default GameOver