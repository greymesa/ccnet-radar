const { SlashCommandBuilder, bold, codeBlock } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("nation")
    .setDescription(
      "Use this command, with a nation name, to find information about it."
    )
    .addStringOption((option) =>
      option
        .setName("name")
        .setDescription("The name of the nation.")
        .setRequired(true)
    ),

  async execute(interaction) {
    const nationname = interaction.options.getString("name");

    var capnationname = nationname
      .replaceAll("_", " ")
      .replace(
        /(^\w|\s\w|\s\_)(\S*)/g,
        (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
      );

    var compltnation = await fetch(
      "https://shadowevil015.tech/api/v1/nations/" + nationname
    )
      .then((res) => res.json())
      .catch((err) => {
        return err;
      });

    var towns = JSON.stringify(compltnation.towns);
    var codeTowns = codeBlock(towns);
    var king = JSON.stringify(compltnation.king);
    var capital = JSON.stringify(compltnation.capitalName);
    var coordinates = JSON.stringify(
      "x: " + compltnation.capitalX + ", " + "z: " + compltnation.capitalZ
    );
    var coordinatesLink = `https://map.ccnetmc.com/nationsmap/#world;flat;${compltnation.capitalX},64,${compltnation.capitalZ};4`;
    var residents = JSON.stringify(compltnation.residents);
    var residentsCount = residents.split(",").length;
    var totalResidents = residentsCount.toString();
    var chunks = JSON.stringify(compltnation.area);

    const nation = new MessageEmbed()
      .setColor("#EE6123")
      .setTitle(bold(`${capnationname}`))
      .setThumbnail(
        "https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437"
      )
      .addFields(
        { name: "Leader:", value: king.replaceAll(/"/g, ""), inline: true },
        { name: "Capital:", value: capital.replaceAll(/"/g, ""), inline: true }
      )
      .addField(
        "Location:",
        `[${coordinates}](${coordinatesLink})`.replaceAll(/"/g, "")
      )
      .addFields(
        { name: "Chunks:", value: chunks, inline: true },
        { name: "Residents:", value: totalResidents, inline: true }
      )
      .addField("Towns:", codeTowns.replaceAll(/"/g, "").replaceAll(/,/g, ", "))
      .setTimestamp()
      .setFooter({
        text: "Bot written by Shadowevil015",
        iconURL:
          "https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437",
      });

    await interaction.reply({ embeds: [nation] });
  },
};
