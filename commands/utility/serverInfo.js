const { SlashCommandBuilder, bold, italic } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("serverinfo")
    .setDescription("Use this command to get data about the CCNet network!"),

  async execute(interaction) {

    let serverInfo = await fetch("https://shadowevil015.tech/api/v1/serverInfo/").then((res) => res.json()).catch((err) => {return err;});

    let network = JSON.stringify(serverInfo.online);
    let towny = JSON.stringify(serverInfo.towny);
    let nations = JSON.stringify(serverInfo.nations);
    let hub = JSON.stringify(serverInfo.hub);
    let firstServerStatus = JSON.stringify(serverInfo.serverOnline);

    let serverStatus;
    if (firstServerStatus == "true") {
      serverStatus = "Online\xa0\xa0\xa0\xa0<:white_check_mark:972838741548867684>";
    } else {
      serverStatus = "Offline\xa0\xa0\xa0\xa0<:x:972839485303828500>";
    }

    const serverinfo = new MessageEmbed()
      .setColor("#EE6123")
      .setTitle(bold(`CCNetMC | ${serverStatus}`))
      .addFields(
        { name: "Towny:", value: towny.replaceAll(/"/g, ""), inline: true },
        { name: "Nations:", value: nations.replaceAll(/"/g, ""), inline: true },
        { name: "\u200B", value: "\u200B", inline: true }
      )
      .addFields(
        { name: "Hub/Movecraft:", value: hub.replaceAll(/"/g, ""), inline: true },
        { name: "Network:", value: network.replaceAll(/"/g, ""), inline: true },
        { name: "\u200B", value: "\u200B", inline: true }
      )
      .setTimestamp()
      .setFooter({text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437"});

    await interaction.reply({ embeds: [serverinfo] });
  },
};
