import React from 'react'

function CardElement(props) {


  return (
    <div onClick={() => {props.onHandleFlip(props.card)}} id={props.card.id} className={`card ${props.card.flipped? "flip" : ""}`}>
      
        <div className="cardFront">
          <img className="icon"src={`./assets/images/${props.card.icon}.png`} alt={props.card.icon}/>
        </div>
        
        <div className="cardBack">
          {"</>"}
        </div>

    </div>
  )
}

export default CardElement