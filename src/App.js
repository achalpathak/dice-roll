import { useState } from 'react';
import './App.css';
import { Dice } from "./components"

import dice_image from './assets/dice_image.svg';

export default function App() {
  const [dice_counter, setDice_counter] = useState(1);
  const [side_counter, setSide_counter] = useState(6);
  const [all_dices, setAll_dices] = useState([]);

  const updateDiceCount = (action) => {
    if (action === 'up') {
      setDice_counter(dice_counter + 1)
    }
    else if (dice_counter > 1) {
      setDice_counter(dice_counter - 1);
    }
  };

  const updateSideCount = (action) => {
    if (action === 'up') {
      setSide_counter(side_counter + 1);
    }
    else if (side_counter > 2) {
      setSide_counter(side_counter - 1);
    }
  };
  
  const getDices = () => {
    setAll_dices([]);
    let dices = [];
    for (let i = 1; i <= dice_counter; i++) {
      let random = Math.floor(Math.random() * side_counter) + 1;
      dices.push(random);
    }
    setAll_dices(dices);
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
        <button className="up_button" onClick={() => updateDiceCount('up')}>Up</button>
        <button className="down_button" onClick={() => updateDiceCount('down')}>Down</button>
      </div>
      <div className="dice_inputs">
        <label htmlFor="side_counter">Number of Side</label>
        <input id="side_counter" type="text" value={side_counter} readOnly />
        <button className="up_button" onClick={() => updateSideCount('up')}>Up</button>
        <button className="down_button" onClick={() => updateSideCount('down')}>Down</button>
      </div>
      <button className="roll_dice_btn" onClick={getDices}>Roll Dice !</button>
      <div className="dice_container">
        {all_dices.length > 0 && all_dices.map((dice, i) => (<Dice count={dice} key={i} />))}
      </div>
      {all_dices.length > 0 && <span className="total_count">Total = {all_dices.reduce((x, y) => x + y)}</span>}
    </div>
  );
}