import React from "react";

function YourBotArmy({ releaseBot, army, dischargeBot }) {

  const handleReleaseBot = (bot) => {
     releaseBot(bot);
     };

  const handleDischargeBot = (bot) => {
    dischargeBot(bot);
  };

  return (
    <div className="your-bot-army" style={{ backgroundColor: 'dark yellow' }}>
      <h2>Your Bot Army</h2>
      {army.map(bot => (
        <div key={bot.id} className="bot-card" onClick={() => handleReleaseBot(bot)}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h2>{bot.name}</h2>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <button className="discharge" onClick={() => handleDischargeBot(bot)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;

