const { readdirSync } = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
require("dotenv").config();

const { ChalkAdvanced } = require("chalk-advanced");

const commands = [];
const commandFiles = readdirSync("./commands").filter((file) =>
  file.endsWith(".js")
);

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);

rest
  .put(Routes.applicationGuildCommands(process.env.CLIENTID, process.env.GUILDID), { body: commands })
  .then(() =>
    console.log(
      `${ChalkAdvanced.white("keith")} ${ChalkAdvanced.gray(
        ">"
      )} ${ChalkAdvanced.green(
        "Successfully registered commands on a local level."
      )}`
    )
  )
  .catch(console.error);
