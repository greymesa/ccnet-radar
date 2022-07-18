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

    const strsieges = JSON.stringify(siegeList);
    const strtimes = JSON.stringify(siegeTimeList);
    const strbalances = JSON.stringify(siegeBalanceList);

    if (siegeList.length === 0) {
      await interaction.reply("There are no sieges currently!");
    } else {
      const siege = new MessageEmbed()
        .setColor("#EE6123")
        .setTitle(bold(`Current Sieges`))
        .addFields(
          { name: "\u200B", value: strsieges.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
          { name: "\u200B", value: strtimes.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
          { name: "\u200B", value: strbalances.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true }
        )
        .setTimestamp()
        .setFooter({text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437"});

      await interaction.reply({ embeds: [siege] });
    }
  },
};