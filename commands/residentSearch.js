const {
  SlashCommandBuilder,
  bold,
  inlineCode,
} = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

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

    var compltusername = await fetch(
      "https://shadowevil015.tech/api/v1/allPlayers/" + username
    )
      .then((res) => res.json())
      .catch((err) => {
        return err;
      });

    var town = JSON.stringify(compltusername.town);
    var nation = JSON.stringify(compltusername.nation);
    var endpointName = JSON.stringify(compltusername.name);
    var capitalisedName = endpointName.replaceAll(/"/g, "");
    var fullRank = JSON.stringify(compltusername.nickname);
    //var rank = fullRank.replaceAll(/"/g, "").split(' ')[0].replace("[", "").replace("]", "")

    let codedName;
    if (capitalisedName.includes("_")) {
      codedName = inlineCode(capitalisedName);
    } else {
      codedName = capitalisedName;
    }

    const resident = new MessageEmbed()
      .setColor("#EE6123")
      .setTitle(bold(`${codedName}`))
      .addFields(
        {
          name: "Town:",
          value: town.replaceAll(/"/g, "").replaceAll(/_/g, " "),
          inline: true,
        },
        {
          name: "Nation:",
          value: nation.replaceAll(/"/g, "").replaceAll(/_/g, " "),
          inline: true,
        }
      )
      .setTimestamp()
      .setFooter({
        text: "Bot written by Shadowevil015",
        iconURL:
          "https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437",
      });

    await interaction.reply({ embeds: [resident] });
  },
};
