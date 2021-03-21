import { useState } from 'react';
import './App.css';
import { Dice } from "./components"

import dice_image from './assets/dice_image.svg';

export default function App() {
  const [dice_counter, setDice_counter] = useState(1);
  const [side_counter, setSide_counter] = useState(6);
  const [rolling_dice, setRolling_dice] = useState(false);
  const [total_dice_count, setTotal_dice_count] = useState(0);
  const [all_dices, setAll_dices] = useState([]);

  const increaseDiceCount = () => {
    setDice_counter(dice_counter + 1)
  };

  const decreaseDiceCount = () => {
    if (dice_counter > 1) {
      setDice_counter(dice_counter - 1);
    }
  };

  const increaseSideCount = () => {
    setSide_counter(side_counter + 1)
  };

  const decreaseSideCount = () => {
    if (side_counter > 2) {
      setSide_counter(side_counter - 1);
    }
  };


  const rollDice = () => {
    setRolling_dice(true);
    setTotal_dice_count(0);
    setAll_dices([]);
    getDices();
  };

  const getDices = () => {
    let new_total = 0;
    for (var i = 1; i <= dice_counter; i++) {
      let random = Math.floor(Math.random() * side_counter) + 1;
      new_total = new_total + random;
      setAll_dices(all_dices => [...all_dices, <Dice count={random} />]);
    }
    setTotal_dice_count(new_total);
  }

  return (
    <div className="App">
      <div className="header">
        <img src={dice_image} alt="" height="60" />
        <h1>Dice Roll Game</h1>
      </div>
      <div className="dice_inputs">
        <label htmlFor="dice_counter">Number of Dice</label>
        <input id="dice_counter" type="text" value={dice_counter} readOnly />
        <button className="up_button" onClick={increaseDiceCount}>Up</button>
        <button className="down_button" onClick={decreaseDiceCount}>Down</button>
      </div>
      <div className="dice_inputs">
        <label htmlFor="side_counter">Number of Side</label>
        <input id="side_counter" type="text" value={side_counter} readOnly />
        <button className="up_button" onClick={increaseSideCount}>Up</button>
        <button className="down_button" onClick={decreaseSideCount}>Down</button>
      </div>
      <button className="roll_dice_btn" onClick={rollDice}>Roll Dice !</button>
      <div className="diceContainer">
        {rolling_dice ? all_dices : null}
      </div>
      {total_dice_count ? <span className="total_count">Total = {total_dice_count}</span> : null}
    </div>
  );
}