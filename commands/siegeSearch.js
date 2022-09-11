const { SlashCommandBuilder, bold } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");
const fetch = require("node-fetch");
var fn = require("../functions.js");
const { client } = require("../keith.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("siegesearch")
    .setDescription("Use this command to select a siege and get detailed information about it!"),

  async execute(interaction, message) {

    const sieges = await fetch("https://shadowevil015.tech/api/v1/sieges").then((res) => res.json()).catch((err) => {return err;});

    var siegeList = [];

    sieges.forEach((siege) => {
      siegeList.push(siege.name);
    });

    const selectm = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId("siege")
          .setPlaceholder("Select a siege")
          .setMaxValues(1)
          .addOptions(
            {
              label: `${siegeList[0]}`,
              description: `test`,
              value: `first`
            },
            {
              label: `${siegeList[1]}`,
              description: `test`,
              value: `second`
            },
            {
              label: `${siegeList[2]}`,
              description: `test`,
              value: `third`
            },
            {
              label: `${siegeList[3]}`,
              description: `test`,
              value: `forth`
            },
            {
              label: `${siegeList[4]}`,
              description: `test`,
              value: `fifth`
            },
            {
              label: `${siegeList[5]}`,
              description: `test`,
              value: `sixth`
            }
          )
      )
    await interaction.reply({ content: "Select a siege to get more information about it!", components: [selectm] });
    

    
  
    const avatURL = interaction.user.displayAvatarURL();

    const logger = new MessageEmbed()
    .setColor("#EE6123")
    .setTitle(`@${interaction.user.tag} used the siegeSearch command to find information about sieges!`)
    .setThumbnail(avatURL)
    .setTimestamp()
    .setFooter({text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437"});

    interaction.client.channels.cache.get("266302670480998400").send({ embeds: [logger] });

    const siege = new MessageEmbed()

    if (sieges.length == 0) {
      await interaction.reply({ content: "There are no sieges currently!" });
    }
    else {

    

      client.on('interactionCreate', async interaction => {
        if (!interaction.isSelectMenu()) return;
          if (interaction.customId === `siege`) {
            if (interaction.values.includes(`first`)) {
              await interaction.deferReply();
              var siegeList = [];
              var siegeNameList = [];
              var siegeTown = [];
              var siegeType = [];
              var siegePoints = [];
              var siegeTimeRemaining = [];
              var siegeWarChest = [];
          
              sieges.forEach((siege) => {
                siegeList.push(siege);
              });
          
              siegeList.forEach((siege) => {
                if (siege.name.includes(siegeList[0].name)) {
                      siegeNameList.push(siege.name);
                      siegeTown.push(siege.town);
                      siegeType.push(siege.type);
                      siegePoints.push(siege.points);
                      siegeTimeRemaining.push(siege.time);
                      siegeWarChest.push(siege.warchest)}
              });
              console.log(siegeNameList);
              let strNames = JSON.stringify(siegeNameList);
              let nameTitle = strNames.replaceAll(/"|]/g, "").replaceAll(/_/g, " ").replace("[", "");
              let strTown = JSON.stringify(siegeTown);
              let strType = JSON.stringify(siegeType);
              let strPoints = JSON.stringify(siegePoints);
              let strTime = JSON.stringify(siegeTimeRemaining);
              let strWarChest = JSON.stringify(siegeWarChest);
          
              let siegeStatus;
              if (strPoints.includes("-")) {
                siegeStatus = "Defender Lead";
              } else {
                siegeStatus = "Attacker Lead";
              }
          
                siege.setColor("#EE6123")
                .setTitle(bold(`${nameTitle}`))
                .addFields(
                  {name: "Besieged Town:", value: fn.clean(strTown), inline: true },
                  {name: "Type:", value: strType.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
                  {name: "Points:", value: strPoints.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true }
                )
                .addFields(
                  {name: "Time Left:", value: strTime.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
                  {name: "War Chest:", value: strWarChest.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replace("[", ""), inline: true },
                  { name: "Status:", value: siegeStatus, inline: true }
                )
                .setTimestamp()
                .setFooter({text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437",})

              await interaction.editReply({ embeds: [siege] })}
            }
          }
      )}}}