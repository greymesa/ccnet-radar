const { SlashCommandBuilder, bold } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("navalsieges")
    .setDescription("Use this command to get a list of all Naval Sieges in Nations!"),

  async execute(interaction) {

    var navalSieges = await fetch("https://shadowevil015.tech/api/v1/navalSieges").then((res) => res.json()).catch((err) => {return err;});

    var navalSiegeList = [];

    navalSieges.forEach((siege) => {
      navalSiegeList.push(siege);
    });

    var navalSiegeName = [];

    navalSiegeList.forEach((siegeNames) => {
        navalSiegeName.push(siegeNames.name);
    });

    var navalSiegeController = [];

    navalSiegeList.forEach((siegeControl) => {
        navalSiegeController.push(siegeControl.controller);
    });

    var strName = JSON.stringify(navalSiegeName);
    var strControl = JSON.stringify(navalSiegeController);
    var navalLinks = `[Link](https://map.ccnetmc.com/nationsmap/#world;flat;2212,64,-4208;3)\n\n[Link](https://map.ccnetmc.com/nationsmap/#world;flat;241,64,-2861;4)\n\n
                      [Link](https://map.ccnetmc.com/nationsmap/#world;flat;-5328,64,-4600;2)\n\n[Link](https://map.ccnetmc.com/nationsmap/#world;flat;17172,64,-1888;3)\n\n
                      [Link](https://map.ccnetmc.com/nationsmap/#world;flat;7548,64,-1296;2)`

    const navalsieges = new MessageEmbed()
        .setColor("#EE6123")
        .setTitle(bold(`Naval Sieges`))
        .addFields(
            {name: "Siege Region:", value: strName.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
            {name: "Controlled By:", value: strControl.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
            {name: "Location:", value: navalLinks, inline: true }
        )
        .setTimestamp()
        .setFooter({text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437",});

        await interaction.reply({ embeds: [navalsieges] });
    },
};