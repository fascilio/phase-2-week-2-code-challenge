import React from "react";

function YourBotArmy({ army, releaseBot, dischargeBot }) {
  const handleReleaseBot = (bot) => {
    releaseBot(bot);
  };

  const handleDischargeBot = (bot) => {
    dischargeBot(bot);
  };

  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.map(bot => (
        <div key={bot.id} className="bot-card">
          <img src={bot.avatar_url} alt={bot.name} />
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