# phase-2-week-2-code-challenge
## Bot Battlr App
This ais a simple application that allows you to view bots and it also allows you to add bots to
your army, release them, and even discharge them entirely. It means that they will also dissappear 
from the server. 

## Getting the App running
1. Clone this repository to your local machine.
2. Open a terminal and navigate to the root of the project directory.
3. Run the following command to install the dependencies: `npm install`.
4. To get the server running, run this command: 
    `json-server --watch db.json --port 8001`.
5. Open another terminal and run this command `npm start` to get the App running.

## Adding Bots
In the `Bot Collection` component, the App is able to make a `GET` request from the server and the 
component renders all the bots available in the server. You can add bots to your army by clicking 
the "Add to army" button on the bot card in the Bot Collection section.

## Releasing Bots
You can release a bot from your army by clicking the "Release" button on the bot card in the Your 
Bot Army section. This will make the bots to dissapperar from `YourBotArmy` component but still 
will remain in the `BotCollection` component.

## Discharging Bots
You can discharge a bot from your army entirely by clicking the "X" button on the bot card in the 
Your Bot Army section. This button makes a`DELETE` requst and removes the bot from both 
`BotCollection` and `YourBotArmy` components.

## Resources;
https://drive.google.com/file/d/157IfYxr4Bp63-ByF1g1wCP1uOpQ5i2R4/view