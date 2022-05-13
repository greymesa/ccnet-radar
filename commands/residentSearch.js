const { SlashCommandBuilder, bold, inlineCode } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
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

    const compltusername = await ccnet.getPlayer(username).then(resident => { return resident });

    if (compltusername === "That player does not exist!") {
      await interaction.reply("I can't find this player! Are you sure you spelt their name correctly?")}
    else {
      const town = JSON.stringify(compltusername.town);
      const nation = JSON.stringify(compltusername.nation);
      const endpointName = JSON.stringify(compltusername.name);
      const capitalisedName = endpointName.replaceAll(/"/g, "");
      const rank = JSON.stringify(compltusername.rank);
      const actualRank = rank.replaceAll(/"/g, "");

      let codedName;
      if (capitalisedName.includes("_")) {
        codedName = inlineCode(capitalisedName);
      } else {
        codedName = capitalisedName;
      }

      const resident = new MessageEmbed()
        .setColor("#EE6123")
        .setTitle(bold(`${codedName} | ${actualRank}`))
        .addFields(
          { name: "Town:", value: town.replaceAll(/"/g, "").replaceAll(/_/g, " "), inline: true},
          { name: "Nation:", value: nation.replaceAll(/"/g, "").replaceAll(/_/g, " "), inline: true }
        )
        .setTimestamp()
        .setFooter({ text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437"});

      await interaction.reply({ embeds: [resident] })
    }
  }
}