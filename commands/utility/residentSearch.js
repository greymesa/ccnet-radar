const { SlashCommandBuilder, bold, inlineCode } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const ccnet = require("ccnetmc");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("resident")
    .setDescription(
      "Use this command, with a username, to find information about the player."
    )
    .addStringOption((option) =>
      option
        .setName("name")
        .setDescription("The username of the player.")
        .setRequired(true)
    ),

  async execute(interaction) {
    const username = interaction.options.getString("name");

    let compltusername = await ccnet.getPlayer(username).then(resident => { return resident })

    const resident = new MessageEmbed()

    if (compltusername === "That player does not exist!") {}
    else {

    let town = JSON.stringify(compltusername.town);
    let nation = JSON.stringify(compltusername.nation);
    let endpointName = JSON.stringify(compltusername.name);
    let capitalisedName = endpointName.replaceAll(/"/g, "");
    let rank = JSON.stringify(compltusername.rank);
    let actualRank = rank.replaceAll(/"/g, "");

    let codedName;
    if (capitalisedName.includes("_")) {
      codedName = inlineCode(capitalisedName);
    } else {
      codedName = capitalisedName;
    }

      resident.setColor("#EE6123")
      .setTitle(bold(`${codedName} | ${actualRank}`))
      .addFields(
        { name: "Town:", value: town.replaceAll(/"/g, "").replaceAll(/_/g, " "), inline: true},
        { name: "Nation:", value: nation.replaceAll(/"/g, "").replaceAll(/_/g, " "), inline: true }
      )
      .setTimestamp()
      .setFooter({ text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437"})}
    
    if (compltusername === "That player does not exist!") {
      await interaction.reply("I can't find this player! Are you sure you spelt their name correctly?")}
    else {
      await interaction.reply({ embeds: [resident] })}
    }
  }