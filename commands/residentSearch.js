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

    await interaction.deferReply()

    const username = interaction.options.getString("name");
    var compltusername = await ccnet.getPlayer(username).then(resident => { return resident });

    const resident = new MessageEmbed()

    if (compltusername == null || compltusername == undefined || compltusername == "That player does not exist!") {
      await interaction.reply("Are you sure this player exists? (Don't forget, you cannot look up a townless player)")}
    else {
      var town = JSON.stringify(compltusername.town);
      var nation = JSON.stringify(compltusername.nation);
      let endpointName = JSON.stringify(compltusername.name);
      var name = inlineCode(endpointName).replace(/\"/g, "");
      var rank = JSON.stringify(compltusername.rank);
      var actualRank = rank.replaceAll(/"/g, "");

        resident.setTitle(bold(`${name} | ${actualRank}`))
        .addFields(
          { name: "Town:", value: town.replaceAll(/"/g, "").replaceAll(/_/g, " "), inline: true},
          { name: "Nation:", value: nation.replaceAll(/"/g, "").replaceAll(/_/g, " "), inline: true }
        )
        .setTimestamp()
        .setFooter({ text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437"});

          await interaction.editReply(({ embeds: [resident] }))
      }
    }
  }