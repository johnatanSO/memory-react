import React from "react";
import CardElement from "./CardElement";

function GameBoard(props) {
  return (
    <div id="gameBoard">
      {props.cards.map((card, index) => {
        return <CardElement onHandleFlip={props.onHandleFlip} key={index} card={card} />;
      })}
    </div>
  );
}

export default GameBoard;
