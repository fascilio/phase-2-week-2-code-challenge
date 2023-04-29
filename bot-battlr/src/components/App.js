// import React, { useState } from 'react';
// import BotCollection from './BotCollection';
// import YourBotArmy from './YourBotArmy';

// function App() {
//   const [army, setArmy] = useState([]);

//   const addToArmy = (bot) => {
//     if (!army.includes(bot)) {
//       setArmy([...army, bot]);
//     }
//   };

//   const releaseBot = (bot) => {
//     const newArmy = army.filter(item => item !== bot);
//     setArmy(newArmy);
//   };

//   const dischargeBot = (bot) => {
//     fetch(`http://localhost:8001/bots/${bot.id}`, { method: 'DELETE' })
//       .then(res => res.json())
//       .then(data => {
//         const newArmy = army.filter(item => item !== bot);
//         setArmy(newArmy);
//       })
//       .catch(error => console.log(error));
//   };

//   return (
//     <div className="App">
//       <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
//       <BotCollection addToArmy={addToArmy} />
//     </div>
//     );
// }

// export default App;
import React, { useState } from 'react';
import BotCollection from './BotCollection';
 import YourBotArmy from './YourBotArmy';
function App() {
    const [army, setArmy] = useState([]);
  
    const addToArmy = (bot) => {
      if (army.includes(bot)) {
        setArmy(army.filter((b) => b !== bot));
      } else {
        setArmy([...army, bot]);
      }
    };
  
    const releaseBot = (bot) => {
      const newArmy = army.filter((item) => item !== bot);
      setArmy(newArmy);
    };
  
    const dischargeBot = (bot) => {
      fetch(`http://localhost:8001/bots/${bot.id}`, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          const newArmy = army.filter((item) => item !== bot);
          setArmy(newArmy);
        })
        .catch((error) => console.log(error));
    };
  
    return (
      <div className="App">
        <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
        <BotCollection addToArmy={addToArmy} />
      </div>
    );
  }
  export default App;

// import React, { useState } from 'react';
// import BotCollection from './BotCollection';
// import YourBotArmy from './YourBotArmy';

// function App() {
//   const [army, setArmy] = useState([]);

//   const addToArmy = (bot) => {
//     if (army.includes(bot)) {
//       const newArmy = army.filter(item => item !== bot);
//       setArmy(newArmy);
//     } else {
//       setArmy([...army, bot]);
//     }
//   };

//   const dischargeBot = (bot) => {
//     fetch(`http://localhost:8001/bots/${bot.id}`, { method: 'DELETE' })
//       .then(res => res.json())
//       .then(data => {
//         const newArmy = army.filter(item => item !== bot);
//         setArmy(newArmy);
//       })
//       .catch(error => console.log(error));
//   };

//   return (
//     <div className="App">
//       <YourBotArmy army={army} dischargeBot={dischargeBot} />
//       <BotCollection addToArmy={addToArmy} />
//     </div>
//   );
// }

// export default App;

