const { SlashCommandBuilder, bold } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sieges")
    .setDescription("Use this command to see a list of all sieges on Nations!"),

  async execute(interaction) {

    let sieges = await fetch("https://shadowevil015.tech/api/v1/sieges").then((res) => res.json()).catch((err) => { return err });

    var siegeList = [];
    var siegeTimeList = [];
    var siegeBalanceList = [];

    sieges.forEach((siege) => {
      siegeList.push(siege.name);
      siegeTimeList.push(siege.time);
      siegeBalanceList.push(siege.points);
    });

    let strsieges = JSON.stringify(siegeList);
    let strtimes = JSON.stringify(siegeTimeList);
    let strbalances = JSON.stringify(siegeBalanceList);

    const siege = new MessageEmbed()

    if (siegeList.length == 0) {
    }
    else {
      siege.setColor("#EE6123")
      .setTitle(bold(`Current Sieges`))
      .addFields(
        { name: "\u200B", value: strsieges.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
        { name: "\u200B", value: strtimes.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
        { name: "\u200B", value: strbalances.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true }
      )
      .setTimestamp()
      .setFooter({text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437"});}

      if (siegeList.length == 0) {
        await interaction.reply("There are no sieges currently!")}
      else {
        await interaction.reply({ embeds: [siege] })}
  },
};