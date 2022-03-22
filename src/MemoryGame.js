import React, { useEffect, useState } from "react";
import GameOver from "./components/GameOver";
import GameBoard from "./components/GameBoard";
import game from "./game/game.js";

function MemoryGame() {
  const [gameOver, setGameOver] = useState(false);
  const [cards, setCards] = useState([]);
  const [flip, setFlip] = useState(null);

  useEffect(() => {
    setCards(game.createCardsFromTecs());
  }, []);

  function restart() {
    game.clearCards();
    setCards(game.createCardsFromTecs());

    setGameOver(false);
  }

  function onHandleFlip(card) {
    game.flipCard(
      card.id,
      () => {
        //gameOverCall
        setGameOver(true);
      },
      () => {
        //noMatchCallBack
        setCards([...game.cards]);
      }
    );
    setCards([...game.cards]);
  }

  return (
    <div className="memoryGame">
      <h1> Jogo da memoria </h1>{" "}
      <GameBoard onHandleFlip={onHandleFlip} cards={cards}>
        {" "}
      </GameBoard>{" "}
      <GameOver handleRestart={restart} show={gameOver}>
        {" "}
      </GameOver>{" "}
    </div>
  );
}

export default MemoryGame;
