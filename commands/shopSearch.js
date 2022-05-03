const { SlashCommandBuilder, bold, inlineCode } = require("@discordjs/builders");
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
      shopsList.push(shop);
    });

    var shopBuyingItem = [];
    var shopSellingItem = [];

    shopsList.forEach((shop) => {
        if (shop.item.includes(selectedItem) && shop.type.includes("Buying")) {
          shopBuyingItem.push(shop.item);
        }
        else {
            shopSellingItem.push(shop.item);
        }
      });

    var shopBuyingStock = [];
    var shopSellingStock = [];

    shopsList.forEach((shop) => {
        if (shop.item.includes(selectedItem) && shop.type.includes("Buying")) {
          shopBuyingStock.push(shop.stock);
        }
        else {
            shopSellingStock.push(shop.stock);
        }
      });

    var strItem = JSON.stringify(ShopBuyingItem);
    var strStock = JSON.stringify(ShopBuyingStock);

    let shopStatus;
    if (interaction.options.getSubcommand() === "buying") {
        shopStatus = "Buying"; }
    else if (interaction.options.getSubcommand() === "selling") {
        shopStatus = "Selling"; }

        const buyshop = new MessageEmbed()
        .setColor("#EE6123")
        .setTitle(bold(`${shopStatus}`))
        .addFields(
          {name: "Item:", value: strItem.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
          {name: "Stock:", value: strStock.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
         // {name: "Owner:", value: strOwner.replaceAll(/"|]|/g, "").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true }
        )
     /*   .addFields(
          {name: "Time Left:", value: strTime.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
          {name: "War Chest:", value: strWarChest.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replace("[", ""), inline: true },
          {name: "Status:", value: siegeStatus, inline: true }
        )*/
        .setTimestamp()
        .setFooter({text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437",});

        if (interaction.options.getSubcommand() === "buying") {
            await interaction.reply({ embeds: [buyshop] });
          } else if (interaction.options.getSubcommand() === "selling") {
            await interaction.reply({ embeds: [sellshop] })};
}};