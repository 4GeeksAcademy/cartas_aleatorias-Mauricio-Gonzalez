import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css"; // Estilos CSS

const suits = ["♦", "♥", "♠", "♣"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const PokerCard = () => {
  const [card, setCard] = useState({ suit: "", value: "" });

  useEffect(() => {
    const randomSuit = getRandomElement(suits);
    const randomValue = getRandomElement(values);
    setCard({ suit: randomSuit, value: randomValue });
  }, []);

  return (
    <div
      className={`card ${
        card.suit === "♥" || card.suit === "♦" ? "red" : "black"
      }`}
    >
      <div className="card-value top-left">
        {card.value}
        {card.suit}
      </div>
      <div className="card-suit">{card.suit}</div>
      <div className="card-value bottom-right">
        {card.value}
        {card.suit}
      </div>
    </div>
  );
};

ReactDOM.render(<PokerCard />, document.querySelector("#myDiv"));
