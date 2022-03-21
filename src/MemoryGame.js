import React, {useEffect, useState} from 'react'
import GameOver from './components/GameOver'
import GameBoard from './components/GameBoard'
import game from './game/game.js'

function MemoryGame(){
  const [gameOver, setGameOver] = useState(false)
  const [cards, setCards] = useState([])
  const [flip, setFlip] = useState(null)

  useEffect(()=>{
    setCards(game.createCardsFromTecs()) 
  },[])


  function restart(){
    setGameOver(false)
  }

  function onHandleFlip(card){   
    if(game.setCard(card.id)){
      
      if(game.secondCard){
        
        if(game.checkMatch()){
          game.clearCards()
          if(game.checkGameOver()){
            //gameOver
          }
        }else{
          setTimeout(()=>{
            //No match
            game.unflipCards()
          },1000)
        }
      }
    }
  }

  return(
    

    <div className='memoryGame'>
      <h1>Jogo da memoria</h1>
      <GameBoard onHandleFlip={onHandleFlip} cards={cards}></GameBoard>
      <GameOver handleRestart={restart} show={gameOver}></GameOver>
    </div>
  )
}


export default MemoryGame