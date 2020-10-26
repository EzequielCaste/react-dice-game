import React, { useState } from "react";
import Dice from "./Dice";

const numString = ["one", "two", "three", "four", "five", "six"];

export default function RollDice() {
  const [disabled, setDisabled] = useState(false);

  const [roll, setRoll] = useState({
    dice1: "one",
    dice2: "two"
  });

  const handleClick = () => {
    setDisabled(true);

    const elementsI = document.querySelectorAll("i");

    elementsI.forEach((el) => {
      el.classList.add("animate__animated");
      el.classList.add("animate__wobble");
    });

    setTimeout(() => {
      const roll1 = Math.floor(Math.random() * 6) + 1;
      const roll2 = Math.floor(Math.random() * 6) + 1;

      setRoll({
        dice1: numString[roll1 - 1],
        dice2: numString[roll2 - 1]
      });

      elementsI.forEach((el) => {
        el.classList.remove("animate__animated");
        el.classList.remove("animate__wobble");
      });

      setDisabled(false);
    }, 800);
  };

  return (
    <div className="dice-container">
      <h1>Dice Game</h1>
      <Dice roll={roll.dice1} />
      <Dice roll={roll.dice2} />
      <button onClick={handleClick} disabled={disabled}>
        {disabled ? "Rolling..." : "Roll Dice!"}
      </button>
    </div>
  );
}
