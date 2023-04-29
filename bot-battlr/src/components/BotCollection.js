import React from "react";
import { useState, useEffect } from 'react';

function BotCollection({ addToArmy }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(data => setBots(data))
      .catch(error => console.log(error));
  }, []);

  const handleClick = (bot) => {
    addToArmy(bot);
  };

  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <div key={bot.id} className="bot-card" onClick={() => handleClick(bot)}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h2>{bot.name}</h2>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
