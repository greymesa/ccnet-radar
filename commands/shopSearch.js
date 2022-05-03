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

    const fullItem = interaction.options.getString("name");

    const splitItemName = fullItem.split(" ");

    for (var i = 0; i < splitItemName.length; i++) {
      splitItemName[i] =
        splitItemName[i].charAt(0).toUpperCase() + splitItemName[i].slice(1);
    }

    const selectedItem = splitItemName.join(" ");

    var shops = await fetch("https://shadowevil015.tech/api/v1/shops").then((res) => res.json()).catch((err) => {return err;});

    var buyingShopsList = [];
    var sellingShopsList = [];

    shops.forEach((shop) => {
      if (shop.type === "Buying") {
        buyingShopsList.push(shop)
      }
      else if (shop.type === "Selling") {
        sellingShopsList.push(shop)
      }});

    var shopBuyingItem = [];
    var shopSellingItem = [];

    buyingShopsList.forEach((shop) => {
      if (shop.item === selectedItem) {
          shopBuyingItem.push(shop.item)}});

    sellingShopsList.forEach((shop) => {
      if (shop.item === selectedItem) {
          shopSellingItem.push(shop.item)}});

    var shopBuyingStock = [];
    var shopSellingStock = [];

    buyingShopsList.forEach((shop) => {
        if (shop.item === selectedItem) {
          shopBuyingStock.push(shop.stock)}});

    sellingShopsList.forEach((shop) => {
        if (shop.item === selectedItem) {
          shopSellingStock.push(shop.stock)}});

    var shopBuyingPriceStock = [];
    var shopSellingPriceStock = [];

    buyingShopsList.forEach((shop) => {
        if (shop.item === selectedItem) {
        var dollardollarbill = `$`
        shopBuyingPriceStock.push(dollardollarbill.concat(shop.price, `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`, shop.stock))}});

    sellingShopsList.forEach((shop) => {
        if (shop.item === selectedItem) {
        var dollardollarbill = `$`
        shopSellingPriceStock.push(dollardollarbill.concat(shop.price, `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`, shop.stock))}});

    var shopBuyingCoords = [];
    var shopSellingCoords = [];

    buyingShopsList.forEach((shop) => {
        if (shop.item === selectedItem) {
          shopBuyingCoords.push(shop.coords)}});

    sellingShopsList.forEach((shop) => {
        if (shop.item === selectedItem) {
          shopSellingCoords.push(shop.coords)}});

    var strBuyItem = JSON.stringify(shopBuyingItem);
    var strBuyPrice = JSON.stringify(shopBuyingPriceStock);
    var strBuyCoords = JSON.stringify(shopBuyingCoords);

    var strSellItem = JSON.stringify(shopSellingItem);
    var strSellPrice = JSON.stringify(shopSellingPriceStock);
    var strSellCoords = JSON.stringify(shopSellingCoords);

    let shopStatus;
    if (interaction.options.getSubcommand() === "buying") {
        shopStatus = "Buying"; }
    else if (interaction.options.getSubcommand() === "selling") {
        shopStatus = "Selling"; }

        const buyshop = new MessageEmbed()
        const sellshop = new MessageEmbed()

        if (buyingShopsList.length === 0) {
        }
        else {

        buyshop.setColor("#EE6123")
        .setTitle(bold(`${shopStatus} | ${selectedItem}`))
        .addFields(
          {name: "Item:", value: strBuyItem.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
          {name: "Price:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Stock:", value: strBuyPrice.replaceAll(/"|]|/g, "").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
          {name: "Location:", value: strBuyCoords.replaceAll(/"|]|/g, "").replaceAll(/,/g, "\n\n").replaceAll("+", ", ").replace("[", ""), inline: true },
        )
        .setTimestamp()
        .setFooter({text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437",});}

        if (sellingShopsList.length === 0) {
        }
        else {


        sellshop.setColor("#EE6123")
        .setTitle(bold(`${shopStatus} | ${selectedItem}`))
        .addFields(
          {name: "Item:", value: strSellItem.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
          {name: "Price:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Stock:", value: strSellPrice.replaceAll(/"|]|/g, "").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
          {name: "Location:", value: strSellCoords.replaceAll(/"|]|/g, "").replaceAll(/,/g, "\n\n").replaceAll("+", ", ").replace("[", ""), inline: true },
        )
        .setTimestamp()
        .setFooter({text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437",});}

        if (interaction.options.getSubcommand() === "buying") {
            await interaction.reply({ embeds: [buyshop] });
          } else if (interaction.options.getSubcommand() === "selling") {
            await interaction.reply({ embeds: [sellshop] })};
}};
