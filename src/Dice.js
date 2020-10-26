import React from "react";

export default function Dice({ roll }) {
  return <i className={`fas fa-dice-${roll}`}></i>;
}
