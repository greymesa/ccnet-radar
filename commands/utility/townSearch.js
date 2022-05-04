const { SlashCommandBuilder, bold, codeBlock, inlineCode } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
var fn = require("../../functions.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("town")
    .setDescription("Use this command, with a town name, to find information about it.")
    .addStringOption((option) =>
      option
        .setName("name")
        .setDescription("The name of the town.")
        .setRequired(true)
    ),

  async execute(interaction) {
    const townname = interaction.options.getString("name");

    let captownname = townname.replaceAll("_", " ").replace(/(^\w|\s\w|\s\_)(\S*)/g,(_, m1, m2) => m1.toUpperCase() + m2.toLowerCase());

    let complttown = await fetch("https://shadowevil015.tech/api/v1/towns/"+townname).then((res) => res.json()).catch((err) => {return err;});

    let onlinePlayers = await fetch("https://shadowevil015.tech/api/v1/onlinePlayers/").then(res => res.json()).catch(err => { return err });

    const town = new MessageEmbed()

    if (complttown === "That town does not exist!") {}

    else {

  
    var onlinePlayersName = []

    onlinePlayers.forEach((player) => {
        onlinePlayersName.push(player.name)
      }
  )
    
    let onlineResidents = complttown.residents.filter(resident => onlinePlayersName.includes(resident));
    let strOnlineResidents = JSON.stringify(onlineResidents);
    let residents = JSON.stringify(complttown.residents);
    let mayor = JSON.stringify(complttown.mayor);
    let coordinates = JSON.stringify("x: " + complttown.x + ", " + "z: " + complttown.z);
    let coordinatesLink = `https://map.ccnetmc.com/nationsmap/#world;flat;${complttown.x},64,${complttown.z};4`;
    let bank = JSON.stringify(complttown.bank);
    let upkeep = JSON.stringify(complttown.upkeep);
    let nation = JSON.stringify(complttown.nation);
    let capNation = nation.replaceAll("_", " ").replace(/(^\w|\s\w|\s\_)(\S*)/g,(_, m1, m2) => m1.toUpperCase() + m2.toLowerCase());
    let peaceful = JSON.stringify(complttown.peacefulness);
    let chunks = JSON.stringify(complttown.area);
    let colourFill = JSON.stringify(complttown.colourCodes.fill).replaceAll(/"/g,"");

    let peacefullness;
    if (peaceful == "true") {
      peacefullness = "Peaceful";
    } else {
      peacefullness = "Non-Peaceful";
    }

    let codedMayor;
    if (mayor.includes("_")) {
      codedMayor = inlineCode(mayor);
    } else {
      codedMayor = mayor;
    }



      town.setColor(colourFill) // Sets the sidebar colour of the embed.
      .setTitle(bold(`${captownname} | ${peacefullness}`)) // Sets the main title of the embed, in bold (who woulda guessed?)
      .setThumbnail("https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437")
      .addFields(
        {name: "Mayor:", value: fn.removeStyleCharacters(codedMayor), inline: true,},
        { name: "Nation:", value: fn.removeStyleCharacters(capNation), inline: true }
      )
      .addFields(
        { name: "Chunks:", value: chunks, inline: true },
        {name: "Location:", value: `[${coordinates}](${coordinatesLink})`.replaceAll(/"/g, ""), inline: true }
      )
      .addFields(
        { name: "Bank:", value: fn.removeStyleCharacters(bank), inline: true },
        { name: "Upkeep:", value: fn.removeStyleCharacters(upkeep), inline: true }
      )
      .addField(
        "Residents:", codeBlock(fn.removeStyleCharacters(residents.replaceAll(",", ", ")))
      )
      .setTimestamp()
      .setFooter({text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437",});

      if (onlineResidents.length == 0) {
        town.addField("Online Residents:", codeBlock("There are no online residents in this town!"));
      }
      else {
        town.addField("Online Residents:", codeBlock(fn.removeStyleCharacters(strOnlineResidents.replaceAll(",", ", "))));
      }}

      if (complttown === "That town does not exist!") {
        await interaction.reply("I can't find a town with that name! Did you spell it correctly?");
      }
      else {
        await interaction.reply({ embeds: [town] })};
  },
};
