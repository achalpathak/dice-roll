import React from 'react'
import "./style.css";
function index({ dice_counter, side_counter }) {

  const getRandom = () => {
    return Math.floor(Math.random() * side_counter) + 1  
  }

  const getDices = () => {
    let all_dices = [];
    for (var i = 1; i <= dice_counter; i++) {
      all_dices.push(<div className="diceBox"><span>{getRandom(side_counter)}</span></div>);
    }
    return all_dices;
  }

  return (
    <div className="diceContainer">
      {getDices()}
    </div>
  )
}

export default index
