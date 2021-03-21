import { useState } from 'react';
import './App.css';
import { Dice } from "./components"



export default function App() {
  const [dice_counter, setDice_counter] = useState(1);
  const [side_counter, setSide_counter] = useState(6);
  const [rolling_dice, setRolling_dice] = useState(false);

  const increaseDiceCount = () => {
    setDice_counter(dice_counter + 1)
    setRolling_dice(false);
  };

  const decreaseDiceCount = () => {
    if (dice_counter > 1) {
      setDice_counter(dice_counter - 1);
      setRolling_dice(false);
    }

  };

  const increaseSideCount = () => {
    setSide_counter(side_counter + 1)
    setRolling_dice(false);
  };

  const decreaseSideCount = () => {
    if (side_counter > 2) {
      setSide_counter(side_counter - 1);
      setRolling_dice(false);
    }
  };


  const rollDice = () => {
    setRolling_dice(true);
  };



  return (
    <div className="App">
      <h1>Dice Roll Game</h1>
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
      {rolling_dice ? <Dice dice_counter={dice_counter} side_counter={side_counter} /> : null}
    </div>
  );
}