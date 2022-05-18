const { SlashCommandBuilder, bold } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const { pagination } = require("reconlx")
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("navalsieges")
    .setDescription("Use this command to get a list of all Naval Sieges in Nations!"),

  async execute(interaction) {

    const navalSieges = await fetch("https://shadowevil015.tech/api/v1/navalSieges").then((res) => res.json()).catch((err) => {return err;});

    let strSieges = JSON.stringify(navalSieges);
    
    let medsiege = strSieges.split("},")[0],
        mSiegeOwner = medsiege.slice(20).split(":")[1].replaceAll(/"/g, "").trim(),
        mSiegeIncome = `$1728`,
        mSiegeTime = `Thursday/Sunday: \n19:00 - 21:00`,
        mSiegeLink = `[Click Here](https://map.ccnetmc.com/nationsmap/#world;flat;2212,64,-4208;3)`

    let pacisiege = strSieges.split("},")[3],
        pSiegeOwner = pacisiege.slice(20).split(":")[1].replaceAll(/"/g, "").trim(),
        pSiegeIncome = `$3456`,
        pSiegeTime = `Friday/Saturday: \n21:00 - 23:00`,
        pSiegeLink = `[Click Here](https://map.ccnetmc.com/nationsmap/#world;flat;17172,64,-1888;3)`

    console.log(pSiegeOwner)

    const meditsiege = new MessageEmbed()
      .setColor("#EE6123")
      .setTitle(bold(`Mediterranean Naval Siege Region`))
      .addFields(
          {name: "Controller:", value: mSiegeOwner.replaceAll(/_/g, " "), inline: true },
          {name: "Daily Reward:", value: mSiegeIncome, inline: true },
          {name: "\u200B", value: `\u200B`, inline: true }
      )
      .addFields(
          {name: "Siege Times:", value: mSiegeTime, inline: true },
          {name: "Map Link:", value: mSiegeLink, inline: true },
          {name: "\u200B", value: `\u200B`, inline: true }
      )
      .setTimestamp()
      .setFooter({text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437"});

      const pacificsiege = new MessageEmbed()
      .setColor("#EE6123")
      .setTitle(bold(`Pacific Naval Siege Region`))
      .addFields(
          {name: "Controller:", value: pSiegeOwner.replaceAll(/_/g, " "), inline: true },
          {name: "Daily Reward:", value: pSiegeIncome, inline: true },
          {name: "\u200B", value: `\u200B`, inline: true }
      )
      .addFields(
          {name: "Siege Times:", value: pSiegeTime, inline: true },
          {name: "Map Link:", value: pSiegeLink, inline: true },
          {name: "\u200B", value: `\u200B`, inline: true }
      )
      .setTimestamp()
      .setFooter({text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437"});

      const embeds = [meditsiege, pacificsiege];

      pagination({
        embeds: embeds,
        message: interaction.channel,
        author: "test",
      })

      await interaction.reply(pagination);
    },
};