const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Intents } = require('discord.js');
require("dotenv").config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

let state = 0;
const presences = [
  { type: 'LISTENING', message: "what you like in men" },
  { type: 'WATCHING', message: "you" },
  { type: 'PLAYING', message: "with your feelings" },
  { type: 'COMPETING', message: "with your ex" },
  { type: 'WATCHING', message: "you sleep" },
  { type: 'WATCHING', message: "Qu1ck3l whine about his ban" },
  { type: 'WATCHING', message: "your nation 3 days" },
  { type: 'WATCHING', message: "Zaify make n3" },
  { type: 'PLAYING', message: "with bedrock breaker grenades" },
];

module.exports = { client };

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
}

client.once('ready', () => {
  console.log('Ready!');
  client.user.setStatus("dnd");
    setInterval(() => {
      state = (state + 1) % presences.length;
      const presence = presences[state];

      client.user.setActivity(presence.message, { type: presence.type });
    }, 120000)
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
});


client.login(process.env.TOKEN);