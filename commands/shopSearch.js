const { SlashCommandBuilder, bold } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("market")
    .setDescription(
      "Use this command to find all shops for a certain item!")
    .addSubcommand((subcommand) => subcommand
        .setName("buying")
        .setDescription("Search only buying shops!")
        .addStringOption((option) => option
        .setName("name")
        .setDescription("The name of either nation in a siege!")
        .setRequired(true)))

    .addSubcommand((subcommand) => subcommand
      .setName("selling")
      .setDescription("Search only selling shops!")
      .addStringOption((option) => option
        .setName("name")
        .setDescription("The name of either nation in a siege!")
        .setRequired(true))),

  async execute(interaction) {

    const selectedItem = interaction.options.getString("name");

    var shops = await fetch("https://shadowevil015.tech/api/v1/shops").then((res) => res.json()).catch((err) => {return err;});

    var shopsList = [];

    shops.forEach((shop) => {
      shopsList.push(shop.item);
    });

    var strShops = JSON.stringify(shopsList);

        /*const siege = new MessageEmbed()
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
          {name: "Status:", value: siegeStatus, inline: true }
        )
        .setTimestamp()
        .setFooter({text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437",});*/

            await interaction.reply(strShops);
},
};