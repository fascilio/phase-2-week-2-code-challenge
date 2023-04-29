import React from "react";
import { useState } from 'react';


function YourBotArmy() {
    const [army, setArmy] = useState([]);
  
    const handleReleaseBot = (bot) => {
      
    };
  
    const handleDischargeBot = (bot) => {
      
    };
  
    return (
      <div className="your-bot-army">
        <h2>Your Bot Army</h2>
        {army.map(bot => (
          <div key={bot.id} className="bot-card">
            <h2>{bot.name}</h2>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <button onClick={() => handleReleaseBot(bot)}>Release</button>
            <button className="discharge" onClick={() => handleDischargeBot(bot)}>X</button>
          </div>
        ))}
      </div>
    );
  }
  export default YourBotArmy;