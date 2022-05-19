const { SlashCommandBuilder, bold, inlineCode } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const ccnet = require("ccnetmc");
const fetch = require("node-fetch");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("resident")
    .setDescription(
      "Use this command, with a username, to find information about the player."
    )
    .addStringOption((option) =>
      option
        .setName("name")
        .setDescription("The username of the player.")
        .setRequired(true)
    ),

  async execute(interaction) {
    
    await interaction.deferReply()

      let onlinePlayers = await ccnet.getOnlinePlayers().then(players => { return players });
  
      var onlinePlayersName = []
  
          onlinePlayers.forEach((player) => {
              onlinePlayersName.push(player.name)
          }
      )
  
      let sortedPlayers = onlinePlayersName.sort(function (a, b) {
              return a.toLowerCase().localeCompare(b.toLowerCase());
          });

    const username = interaction.options.getString("name");

    const resident = new MessageEmbed()

    const compltusername = await ccnet.getPlayer(username).then(resident => { return resident });

    if (compltusername === "That player does not exist!") {
      await interaction.reply("I can't find this player! Are you sure you spelt their name correctly?")}
    else {
      const strSortedPlayers = JSON.stringify(sortedPlayers);
      const town = JSON.stringify(compltusername.town);
      const nation = JSON.stringify(compltusername.nation);
      const endpointName = JSON.stringify(compltusername.name);
      const nickname = JSON.stringify(compltusername.nickname);
      const capitalisedName = endpointName.replaceAll(/"/g, "");
      const rank = JSON.stringify(compltusername.rank);
      const actualRank = rank.replaceAll(/"/g, "");
      
      let status;
      if (strSortedPlayers.includes(endpointName)) {
        status = "Online";
        resident.setColor("GREEN")
      } else {
        status = "Offline";
        resident.setColor("RED")
      }

      let codedName;
      if (capitalisedName.includes("_")) {
        codedName = inlineCode(capitalisedName);
      } else {
        codedName = capitalisedName;

        resident.setTitle(bold(`${codedName} | ${status}`))
        .addFields(
          { name: "Town:", value: town.replaceAll(/"/g, "").replaceAll(/_/g, " "), inline: true},
          { name: "Nation:", value: nation.replaceAll(/"/g, "").replaceAll(/_/g, " "), inline: true },
          { name: "\u200b", value: "\u200b", inline: true },
          { name: "Rank:", value: actualRank.replaceAll(/"/g, ""), inline: true },
        )
        .setTimestamp()
        .setFooter({ text: "Bot written by Shadowevil015", iconURL:"https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437"});

      if (status === "Online") {
        const inGameRank = nickname.split("]")[0].replace("[", "").replaceAll(/"/g, "");
        resident.addField("In-game Rank:", inGameRank, true)
        resident.addField("\u200B", "\u200B", true)
      } else {}

          await interaction.editReply(({ embeds: [resident] }))
      }
    }
  }
}