const { SlashCommandBuilder, bold } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sieges")
    .setDescription("Use this command to see a list of all sieges on Nations!"),

  async execute(interaction) {
    const sieges = await fetch("https://shadowevil015.tech/api/v1/sieges").then((res) => res.json()).catch((err) => { return err });

    const avatURL = interaction.user.displayAvatarURL();

    const logger = new MessageEmbed()
    .setColor("#EE6123")
    .setTitle(`@${interaction.user.tag} used the sieges command to find information about sieges!`)
    .setThumbnail(avatURL)
    .setTimestamp()
    .setFooter({text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437"});

    interaction.client.channels.cache.get("266302670480998400").send({ embeds: [logger] });

    var siegeList = [];
    var siegeTimeList = [];
    var siegeBalanceList = [];

    sieges.forEach((siege) => {
      siegeList.push(siege.name);
      siegeTimeList.push(siege.time);
      siegeBalanceList.push(siege.points);

    });

    let siege1
    let siege2
    let siege3
    let siege4
    let siege5
    let siege6

  if (siegeList.length != 0) {
   siege1 = {
      name: siegeList[0].replace(" ", "\n"),
      time: `Time Left: ${siegeTimeList[0]}`,
      balance: `Points: ${siegeBalanceList[0]}`,
      winner: siegeBalanceList[0].includes("-") ? "Defender Lead" : "Attacker Lead"
    }}
  if (siegeList[1] != undefined) {
   siege2 = {
      name: siegeList[1].replace(" ", "\n"),
      time: `Time Left: ${siegeTimeList[1]}`,
      balance: `Points: ${siegeBalanceList[1]}`,
      winner: siegeBalanceList[1].includes("-") ? "Defender Lead" : "Attacker Lead"
    }}

  if (siegeList[2] != undefined) {
   siege3 = {
      name: siegeList[2].replace(" ", "\n"),
      time: `Time Left: ${siegeTimeList[2]}`,
      balance: `Points: ${siegeBalanceList[2]}`,
      winner: siegeBalanceList[2].includes("-") ? "Defender Lead" : "Attacker Lead"
    }}
  if (siegeList[3] != undefined) {
    let siege4 = {
      name: siegeList[3].replace(" ", "\n"),
      time: `Time Left: ${siegeTimeList[3]}`,
      balance: `Points: ${siegeBalanceList[3]}`,
      winner: siegeBalanceList[3].includes("-") ? "Defender Lead" : "Attacker Lead"
    }}
  if (siegeList[4] != undefined) {
    let siege5 = {
      name: siegeList[4].replace(" ", "\n"),
      time: `Time Left: ${siegeTimeList[4]}`,
      balance: `Points: ${siegeBalanceList[4]}`,
      winner: siegeBalanceList[4].includes("-") ? "Defender Lead" : "Attacker Lead"
    }}
  if (siegeList[5] != undefined) {
    let siege6 = {
      name: siegeList[5].replace(" ", "\n"),
      time: `Time Left: ${siegeTimeList[5]}`,
      balance: `Points: ${siegeBalanceList[5]}`,
      winner: siegeBalanceList[5].includes("-") ? "Defender Lead" : "Attacker Lead"
    }}

    const embedSiege = new MessageEmbed()
    .setColor("#EE6123")
    .setTitle(bold(`Current Sieges`))
    .addFields(
      { name: siege1.name.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), value: siege1.time.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
      { name: siege1.winner, value: siege1.balance }
    )
    .setTimestamp()
    .setFooter({text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437"});

    if (siegeList[1] != undefined) {
      embedSiege.addFields(
        { name: siege2.name.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), value: siege2.time.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
        { name: siege2.winner, value: siege2.balance }
      );
    }
    if (siegeList[2] != undefined) {
      embedSiege.addFields(
        { name: siege3.name.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), value: siege3.time.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
        { name: siege3.winner, value: siege2.balance }
      );
    }
    if (siegeList[3] != undefined) {
      embedSiege.addFields(
        { name: siege4.name.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), value: siege4.time.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
        { name: siege4.winner, value: siege4.balance }
      );
    }
    if (siegeList[4] != undefined) {
      embedSiege.addFields(
        { name: siege5.name.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), value: siege5.time.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
        { name: siege5.winner, value: siege5.balance }
      );
    }
    if (siegeList[5] != undefined) {
      embedSiege.addFields(
        { name: siege6.name.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), value: siege6.time.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
        { name: siege6.winner, value: siege6.balance }
      );
    }

    if (siegeList.length === 0) {
      await interaction.reply("There are no sieges currently!");
    } else {
      await interaction.reply({ embeds: [embedSiege] });
    }
  },
};