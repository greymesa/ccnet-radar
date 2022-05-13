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
    const fullItem = interaction.options.getString("name");
    const splitItemName = fullItem.split(" ");

    for (let i = 0; i < splitItemName.length; i++) {
      splitItemName[i] = splitItemName[i].charAt(0).toUpperCase() + splitItemName[i].slice(1);
    }

    const selectedItem = splitItemName.join(" ");

    const shops = await fetch("https://shadowevil015.tech/api/v1/shops").then((res) => res.json()).catch((err) => {return err});

    let buyingShopsList = [];
    let sellingShopsList = [];

    shops.forEach((shop) => {
      if (shop.type === "Buying") {
        buyingShopsList.push(shop)
      } else if (shop.type === "Selling") {
        sellingShopsList.push(shop)
      }
    });

    let shopBuyingItem = [];
    let shopSellingItem = [];

    let shopBuyingPriceStock = [];
    let shopSellingPriceStock = [];

    let shopBuyingCoords = [];
    let shopSellingCoords = [];

    buyingShopsList.forEach((shop) => {
      if (shop.item === selectedItem) {
        let dollardollarbill = `$`;
        shopBuyingItem.push(shop.item);
        shopBuyingPriceStock.push(dollardollarbill.concat(shop.price, `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`, shop.stock));
        shopBuyingCoords.push(shop.coords);
      }
    });

    sellingShopsList.forEach((shop) => {
      if (shop.item === selectedItem) {
          let dollardollarbill = `$`;
          shopSellingItem.push(shop.item);
          shopSellingPriceStock.push(dollardollarbill.concat(shop.price, `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`, shop.stock));
          shopSellingCoords.push(shop.coords);
      }
    });

    const strBuyItem = JSON.stringify(shopBuyingItem);
    const strBuyPrice = JSON.stringify(shopBuyingPriceStock);
    const strBuyCoords = JSON.stringify(shopBuyingCoords);

    const strSellItem = JSON.stringify(shopSellingItem);
    const strSellPrice = JSON.stringify(shopSellingPriceStock);
    const strSellCoords = JSON.stringify(shopSellingCoords);

    let shopStatus;

    switch(interaction.options.getSubcommand()) {
      case "buying": {
        shopStatus = "Buying";
        
        if (buyingShopsList.length != 0) {
          const buyshop = new MessageEmbed()
            .setColor("#EE6123")
            .setTitle(bold(`${shopStatus} | ${selectedItem}`))
            .addFields(
              { name: "Item:", value: strBuyItem.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
              { name: "Price:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Stock:", value: strBuyPrice.replaceAll(/"|]|/g, "").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
              { name: "Location:", value: strBuyCoords.replaceAll(/"|]|/g, "").replaceAll(/,/g, "\n\n").replaceAll("+", ", ").replace("[", ""), inline: true },
            )
            .setTimestamp()
            .setFooter({text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437"});
            
            await interaction.reply({ embeds: [buyshop] });
        } else {
          await interaction.reply({ content: "An error occured." });
        }
        break;
      }
      case "selling": {
        shopStatus = "Selling";

        if (sellingShopsList.length != 0) {
          const sellshop = new MessageEmbed()
            .setColor("#EE6123")
            .setTitle(bold(`${shopStatus} | ${selectedItem}`))
            .addFields(
              {name: "Item:", value: strSellItem.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
              {name: "Price:\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Stock:", value: strSellPrice.replaceAll(/"|]|/g, "").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
              {name: "Location:", value: strSellCoords.replaceAll(/"|]|/g, "").replaceAll(/,/g, "\n\n").replaceAll("+", ", ").replace("[", ""), inline: true },
            )
            .setTimestamp()
            .setFooter({text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437"});

            await interaction.reply({ embeds: [sellshop] });
        } else {
          await interaction.reply({ content: "An error occured." });
        }
        break;
      }
    }
  }
};
