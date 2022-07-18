const { SlashCommandBuilder, bold, codeBlock, inlineCode } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
var fn = require("../functions.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("town")
    .setDescription("Use this command, with a town name, to find information about it.")
    .addStringOption((option) =>
      option
        .setName("name")
        .setDescription("The name of the town.")
        .setRequired(true)),

  async execute(interaction) {
    const townname = interaction.options.getString("name");
    const uTownName = townname.replaceAll(" ", "_")

    const captownname = townname.replaceAll("_", " ").replace(/(^\w|\s\w|\s\_)(\S*)/g,(_, m1, m2) => m1.toUpperCase() + m2.toLowerCase());
    const complttown = await fetch("https://shadowevil015.tech/api/v1/towns/"+uTownName).then((res) => res.json()).catch((err) => {return err;});
    const onlinePlayers = await fetch("https://shadowevil015.tech/api/v1/onlinePlayers/").then(res => res.json()).catch(err => { return err });

    const avatURL = interaction.user.displayAvatarURL();

    const logger = new MessageEmbed()
    .setColor("#EE6123")
    .setTitle(`@${interaction.user.tag} used the town command to find information about ${uTownName}!`)
    .setThumbnail(avatURL)
    .setTimestamp()
    .setFooter({text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437"});

    interaction.client.channels.cache.get("266302670480998400").send({ embeds: [logger] });

    if (complttown === "That town does not exist!") {
      await interaction.reply(`I can't find a town called "${townname}", did you spell it correctly?`);
    } else {
      let onlinePlayersName = []

      onlinePlayers.forEach((player) => {
        onlinePlayersName.push(player.name);
      });

      const onlineResidents = complttown.residents.filter(resident => onlinePlayersName.includes(resident));
      const strOnlineResidents = JSON.stringify(onlineResidents);
      const residents = JSON.stringify(complttown.residents);
      const mayor = JSON.stringify(complttown.mayor);
      const coordinates = JSON.stringify("x: " + complttown.x + ", " + "z: " + complttown.z);
      const coordinatesLink = `https://map.ccnetmc.com/nationsmap/#world;flat;${complttown.x},64,${complttown.z};4`;
      const bank = JSON.stringify(complttown.bank);
      const upkeep = JSON.stringify(complttown.upkeep);
      const nation = JSON.stringify(complttown.nation);
      const capNation = nation.replaceAll("_", " ").replace(/(^\w|\s\w|\s\_)(\S*)/g,(_, m1, m2) => m1.toUpperCase() + m2.toLowerCase());
      const peaceful = JSON.stringify(complttown.peacefulness);
      const chunks = JSON.stringify(complttown.area);
      const colourFill = JSON.stringify(complttown.colourCodes.fill).replaceAll(/"/g,"");
  
      const peacefullness = peaceful === "true" ? "Peaceful" : "Non-Peaceful";
      const codedMayor = mayor.includes("_") ? inlineCode(mayor) : mayor;

      const town = new MessageEmbed()
        .setColor(colourFill) // Sets the sidebar colour of the embed.
        .setTitle(bold(`${captownname} | ${peacefullness}`)) // Sets the main title of the embed, in bold (who woulda guessed?)
        .setThumbnail("https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437")
        .addFields(
          { name: "Mayor:", value: fn.removeStyleCharacters(codedMayor), inline: true },
          { name: "Nation:", value: fn.removeStyleCharacters(capNation), inline: true }
        )
        .addFields(
          { name: "Chunks:", value: chunks, inline: true },
          { name: "Location:", value: `[${coordinates}](${coordinatesLink})`.replaceAll(/"/g, ""), inline: true }
        )
        .addFields(
          { name: "Bank:", value: fn.removeStyleCharacters(bank), inline: true },
          { name: "Upkeep:", value: fn.removeStyleCharacters(upkeep), inline: true }
        )
        .addField( "Residents:", codeBlock(fn.removeStyleCharacters(residents.replaceAll(",", ", "))))
        .setTimestamp()
        .setFooter({text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437"});


      if (onlineResidents.length == 0) {
        town.addField("Online Residents:", codeBlock("There are no online residents in this town!"));
      } else {
        town.addField("Online Residents:", codeBlock(fn.removeStyleCharacters(strOnlineResidents.replaceAll(",", ", "))));
      }
      
      await interaction.reply({ embeds: [town] })
    }
  },
};
