const {
  SlashCommandBuilder,
  bold,
  italic,
  inlineCode,
} = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("faq")
    .setDescription("Use this command to get an answer from the faq!")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("ip")
        .setDescription("A list of the CCNetMC related IP Addresses!")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("wiki").setDescription("A link to our wiki!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("resourcepack")
        .setDescription("A link to the CCNet resourcepack!")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("map").setDescription("A link to the CCNet Dynmap!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("logs")
        .setDescription("A guide to submitting logs, for use in tickets!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("reboot")
        .setDescription(
          "A guide on what to do, in the event of a server crash!"
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("appeal")
        .setDescription("A guide on how to appeal a ban!")
    ),

  async execute(interaction) {
    var boldheading = bold(
      "One of the servers is suffering unbearable lag more than normal?"
    );

    const ip = new MessageEmbed()
      .setColor("#EE6123")
      .setTitle(bold("What is the IP?"))
      .setDescription(italic("You can use the following IPs to join CCNet:"))
      .addFields(
        { name: "\u200B", value: "\u200B" },
        { name: "Europe:", value: inlineCode("play.ccnetmc.com") },
        { name: "NA:", value: inlineCode("na.ccnetmc.com") },
        { name: "Asia:", value: inlineCode("asia.ccnetmc.com") },
        { name: "\u200B", value: "\u200B" }
      )
      .setTimestamp()
      .setFooter({
        text: "Bot written by Shadowevil015",
        iconURL:
          "https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437",
      });

    const wiki = new MessageEmbed()
      .setColor("#EE6123")
      .setTitle(bold("Wiki"))
      .setDescription(italic("You can view the wiki via this link:"))
      .addFields(
        { name: "\u200B", value: "\u200B" },
        {
          name: "Link:",
          value: "[https://www.wiki.ccnetmc.com](https://www.wiki.ccnetmc.com)",
        },
        { name: "\u200B", value: "\u200B" }
      )
      .setTimestamp()
      .setFooter({
        text: "Bot written by Shadowevil015",
        iconURL:
          "https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437",
      });

    const resourcepack = new MessageEmbed()
      .setColor("#EE6123")
      .setTitle(bold("Resource Pack"))
      .setDescription(
        italic("You can download the resource pack via this link:")
      )
      .addFields(
        { name: "\u200B", value: "\u200B" },
        {
          name: "Link:",
          value:
            "[https://www.dropbox.com/s/312j10m4cw611au/CCNet.zip?dl=1](https://www.dropbox.com/s/312j10m4cw611au/CCNet.zip?dl=1)",
        },
        { name: "\u200B", value: "\u200B" }
      )
      .setTimestamp()
      .setFooter({
        text: "Bot written by Shadowevil015",
        iconURL:
          "https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437",
      });

    const map = new MessageEmbed()
      .setColor("#EE6123")
      .setTitle(bold("Dynmap"))
      .setDescription(italic("You can view the Dynmap via this link:"))
      .addFields(
        { name: "\u200B", value: "\u200B" },
        {
          name: "Link:",
          value: "[https://www.map.ccnetmc.com](https://www.map.ccnetmc.com)",
        },
        { name: "\u200B", value: "\u200B" }
      )
      .setTimestamp()
      .setFooter({
        text: "Bot written by Shadowevil015",
        iconURL:
          "https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437",
      });

    const logs = new MessageEmbed()
      .setColor("#EE6123")
      .setTitle(bold("How Do I Send Logs?"))
      .addFields(
        { name: "\u200B", value: "\u200B" },
        {
          name: "Follow these instructions to get your logs:",
          value: `
                 1) Find your Minecraft folder.\n
                 
                 - Windows: Click on Start and type %appdata% . Open the .minecraft folder. \n
                 - MacOS: Click on Go → Go to Folder... and type ~/Library/Application Support . Open the minecraft folder. \n
                
                2) Open the logs folder. You will see a number of .gz files, with their date. Each file contains a log from that date. Extract those you think you need by using a file archiver (7Zip, WinRAR, Keka). \n
                
                3) Open the log file and find the information you have been asked for. \n
                
                4) Send the information in the ticket, along with the log file for verification if needed.`,
        },
        { name: "\u200B", value: "\u200B" }
      )
      .setTimestamp()
      .setFooter({
        text: "Bot written by Shadowevil015",
        iconURL:
          "https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437",
      });

    const reboot = new MessageEmbed()
      .setColor("#EE6123")
      .setTitle(bold("What should you do if a server goes down?"))
      .addFields(
        { name: "\u200B", value: "\u200B" },
        {
          name: "One of the servers is down, now what?",
          value: `
                
                \n1) Check if anyone else has already alerted Zaify or Ineusia
                2) If not, ping @ Reboot in a relevant channel with a message stating which server is down\n
                
                ${boldheading}
                1) Check if anyone else has already alerted Staff
                2) If not, let a Moderator or Admin know and request them to check out the lag
                3) If the staff member determines that the lag is sufficiently worse than normal, they may request that the affected server is rebooted
                
                `,
        },
        { name: "\u200B", value: "\u200B" }
      )
      .setTimestamp()
      .setFooter({
        text: "Bot written by Shadowevil015",
        iconURL:
          "https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437",
      });

    const appeal = new MessageEmbed()
      .setColor("#EE6123")
      .setTitle(bold("How do I appeal?"))
      .setDescription(italic("You can appeal your ban via this link:"))
      .addFields(
        {
          name: "Link:",
          value: "[https://ccnetmc.com/appeal](https://ccnetmc.com/appeal)",
        },
        {
          name: "\u200B",
          value:
            "Note: You will need to create an account to make a ban appeal.",
        }
      )
      .setTimestamp()
      .setFooter({
        text: "Bot written by Shadowevil015",
        iconURL:
          "https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437",
      });

    if (interaction.options.getSubcommand() === "ip") {
      await interaction.reply({ embeds: [ip] });
    } else if (interaction.options.getSubcommand() === "wiki") {
      await interaction.reply({ embeds: [wiki] });
    } else if (interaction.options.getSubcommand() === "resourcepack") {
      await interaction.reply({ embeds: [resourcepack] });
    } else if (interaction.options.getSubcommand() === "map") {
      await interaction.reply({ embeds: [map] });
    } else if (interaction.options.getSubcommand() === "logs") {
      await interaction.reply({ embeds: [logs] });
    } else if (interaction.options.getSubcommand() === "reboot") {
      await interaction.reply({ embeds: [reboot] });
    } else if (interaction.options.getSubcommand() === "appeal") {
      await interaction.reply({ embeds: [appeal] });
    }
  },
};
