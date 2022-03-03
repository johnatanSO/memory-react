import React from 'react'

function CardElement({card}) {
  return (
    <div id={card.id} className="card">
      
        <div className="cardFront">
          <img className="icon"src={`./assets/images/${card.icon}.png`} alt={card.icon}/>
        </div>
        
        <div className="cardBack">
          {"</>"}
        </div>

    </div>
  )
}

export default CardElement