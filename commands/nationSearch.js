const { SlashCommandBuilder, bold, codeBlock } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("nation")
    .setDescription("Use this command, with a nation name, to find information about it.")
    .addStringOption((option) => option
        .setName("name")
        .setDescription("The name of the nation.")
        .setRequired(true)),

  async execute(interaction) {
    const nationname = interaction.options.getString("name");

    const capnationname = nationname.replaceAll("_", " ").replace(/(^\w|\s\w|\s\_)(\S*)/g, (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase());
    const compltnation = await fetch("https://shadowevil015.tech/api/v1/nations/" + nationname).then((res) => res.json()).catch((err) => {return err;});
    const onlinePlayers = await fetch("https://shadowevil015.tech/api/v1/onlinePlayers/").then(res => res.json()).catch(err => { return err });
    let onlinePlayersName = [];

    onlinePlayers.forEach((player) => {
        onlinePlayersName.push(player.name);
    });

    if (compltnation === "That nation does not exist!") {
      await interaction.reply("I can't find a nation with that name! Did you spell it correctly?");
    } else {
      const onlineResidents = compltnation.residents.filter(resident => onlinePlayersName.includes(resident));
      const strOnlineResidents = JSON.stringify(onlineResidents);
      const towns = JSON.stringify(compltnation.towns);
      const codeTowns = codeBlock(towns);
      const king = JSON.stringify(compltnation.king);
      const capital = JSON.stringify(compltnation.capitalName);
      const coordinates = JSON.stringify("x: " + compltnation.capitalX + ", " + "z: " + compltnation.capitalZ);
      const coordinatesLink = `https://map.ccnetmc.com/nationsmap/#world;flat;${compltnation.capitalX},64,${compltnation.capitalZ};4`;
      const residents = JSON.stringify(compltnation.residents);
      const residentsCount = residents.split(",").length;
      const totalResidents = residentsCount.toString();
      const chunks = JSON.stringify(compltnation.area);

      const nation = new MessageEmbed()
        .setColor("#EE6123")
        .setTitle(bold(`${capnationname}`))
        .setThumbnail("https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437")
        .addFields(
          { name: "Leader:", value: king.replaceAll(/"/g, ""), inline: true },
          { name: "Capital:", value: capital.replaceAll(/"/g, ""), inline: true }
        )
        .addField("Location:", `[${coordinates}](${coordinatesLink})`.replaceAll(/"/g, ""))
        .addFields(
          { name: "Chunks:", value: chunks, inline: true },
          { name: "Residents:", value: totalResidents, inline: true }
        )
        .addField("Towns:", codeTowns.replaceAll(/"/g, "").replaceAll(/,/g, ", "))
        .setTimestamp()
        .setFooter({text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437"});

      if (onlineResidents.length == 0) {
        nation.addField("Online Nation Members:", codeBlock("There are no online nation members!"))
      }
      else {
        nation.addField("Online Nation Members:", codeBlock(strOnlineResidents.replaceAll(/"/g, "").replaceAll(/,/g, ", ")))
      }

      await interaction.reply({ embeds: [nation] })};
  },
};