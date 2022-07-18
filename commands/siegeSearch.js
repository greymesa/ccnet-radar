const { SlashCommandBuilder, bold } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
var fn = require("../functions.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("siegesearch")
    .setDescription("Use this command to select a siege and get detailed information about it!")
    .addStringOption((option) => option
        .setName("name")
        .setDescription("The name of either nation in a siege!")
        .setRequired(true)),

  async execute(interaction) {
    const uncapSiegeName = interaction.options.getString("name");
    let splitSiegeName = uncapSiegeName.split("_");

    const avatURL = interaction.user.displayAvatarURL();

    const logger = new MessageEmbed()
    .setColor("#EE6123")
    .setTitle(`@${interaction.user.tag} used the nation command to find information about ${uncapSiegeName}!`)
    .setThumbnail(avatURL)
    .setTimestamp()
    .setFooter({text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437"});

    interaction.client.channels.cache.get("266302670480998400").send({ embeds: [logger] });

    for (let i = 0; i < splitSiegeName.length; i++) {
      splitSiegeName[i] = splitSiegeName[i].charAt(0).toUpperCase() + splitSiegeName[i].slice(1);
    }

    const siegeName = splitSiegeName.join("_");

    const sieges = await fetch("https://shadowevil015.tech/api/v1/sieges").then((res) => res.json()).catch((err) => {return err;});

    const siege = new MessageEmbed()

    if (sieges.length == 0) {
    }
    else {

    var siegeList = [];
    var siegeNameList = [];
    var siegeTown = [];
    var siegeType = [];
    var siegePoints = [];
    var siegeTimeRemaining = [];
    var siegeWarChest = [];

    sieges.forEach((siege) => {
      siegeList.push(siege);
    });

    siegeList.forEach((siege) => {
      if (siege.name.includes(siegeName)) {
            siegeNameList.push(siege.name);
            siegeTown.push(siege.town);
            siegeType.push(siege.type);
            siegePoints.push(siege.points);
            siegeTimeRemaining.push(siege.time);
            siegeWarChest.push(siege.warchest)}
    });

    let strNames = JSON.stringify(siegeNameList);
    let nameTitle = strNames.replaceAll(/"|]/g, "").replaceAll(/_/g, " ").replace("[", "");
    let strTown = JSON.stringify(siegeTown);
    let strType = JSON.stringify(siegeType);
    let strPoints = JSON.stringify(siegePoints);
    let strTime = JSON.stringify(siegeTimeRemaining);
    let strWarChest = JSON.stringify(siegeWarChest);

    let siegeStatus;
    if (strPoints.includes("-")) {
      siegeStatus = "Defender Lead";
    } else {
      siegeStatus = "Attacker Lead";
    }

      siege.setColor("#EE6123")
      .setTitle(bold(`${nameTitle}`))
      .addFields(
        {name: "Besieged Town:", value: fn.clean(strTown), inline: true },
        {name: "Type:", value: strType.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
        {name: "Points:", value: strPoints.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true }
      )
      .addFields(
        {name: "Time Left:", value: strTime.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
        {name: "War Chest:", value: strWarChest.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replace("[", ""), inline: true },
        { name: "Status:", value: siegeStatus, inline: true }
      )
      .setTimestamp()
      .setFooter({text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437",})};
    
    if (sieges.length == 0) {
      await interaction.reply("No sieges with that name were found!")}
    else {
      await interaction.reply({ embeds: [siege] })
    }
  },
};