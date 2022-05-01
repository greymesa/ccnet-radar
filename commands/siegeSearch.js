const { SlashCommandBuilder, bold } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("siegesearch")
    .setDescription(
      "Use this command to select a siege and get detailed information about it!"
    )
    .addStringOption((option) =>
      option
        .setName("name")
        .setDescription("The name of either nation in a siege!")
        .setRequired(true)
    ),

  async execute(interaction) {
    const uncapSiegeName = interaction.options.getString("name");

    const splitSiegeName = uncapSiegeName.split("_");

    for (var i = 0; i < splitSiegeName.length; i++) {
      splitSiegeName[i] =
        splitSiegeName[i].charAt(0).toUpperCase() + splitSiegeName[i].slice(1);
    }

    const siegeName = splitSiegeName.join("_");

    var sieges = await fetch("https://shadowevil015.tech/api/v1/sieges").then((res) => res.json()).catch((err) => {return err;});

    var siegeList = [];

    sieges.forEach((siege) => {
      siegeList.push(siege);
    });

    var siegeNameList = [];

    siegeList.forEach((siegeNames) => {
      if (siegeNames.name.includes(siegeName)) {
        siegeNameList.push(siegeNames.name);
      }
    });

    var siegeTown = [];

    siegeList.forEach((siegeTowns) => {
      if (siegeTowns.name.includes(siegeName)) {
        siegeTown.push(siegeTowns.town);
      }
    });

    var siegeType = [];

    siegeList.forEach((siegeTypes) => {
      if (siegeTypes.name.includes(siegeName)) {
        siegeType.push(siegeTypes.type);
      }
    });

    var siegePoints = [];

    siegeList.forEach((siegePoint) => {
      if (siegePoint.name.includes(siegeName)) {
        siegePoints.push(siegePoint.points);
      }
    });

    var siegeTimeRemaining = [];

    siegeList.forEach((siegeTime) => {
      if (siegeTime.name.includes(siegeName)) {
        siegeTimeRemaining.push(siegeTime.time);
      }
    });

    var siegeWarChest = [];

    siegeList.forEach((siegeChest) => {
      if (siegeChest.name.includes(siegeName)) {
        siegeWarChest.push(siegeChest.warchest);
      }
    });

    var strNames = JSON.stringify(siegeNameList);
    var nameTitle = strNames.replaceAll(/"|]/g, "").replaceAll(/_/g, " ").replace("[", "");
    var strTown = JSON.stringify(siegeTown);
    var strType = JSON.stringify(siegeType);
    var strPoints = JSON.stringify(siegePoints);
    var strTime = JSON.stringify(siegeTimeRemaining);
    var strWarChest = JSON.stringify(siegeWarChest);

    let siegeStatus;
    if (strPoints.includes("-")) {
      siegeStatus = "Defender Lead";
    } else {
      siegeStatus = "Attacker Lead";
    }

    const siege = new MessageEmbed()
      .setColor("#EE6123")
      .setTitle(bold(`${nameTitle}`))
      .addFields(
        {name: "Besieged Town:", value: strTown.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
        {name: "Type:", value: strType.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
        {name: "Points:", value: strPoints.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true }
      )
      .addFields(
        {name: "Time Left:", value: strTime.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
        {name: "War Chest:", value: strWarChest.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replace("[", ""), inline: true },
        { name: "Status:", value: siegeStatus, inline: true }
      )
      .setTimestamp()
      .setFooter({text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437",});

    await interaction.reply({ embeds: [siege] });
  },
};
