const { SlashCommandBuilder, bold, inlineCode } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('onlineplayers')
		.setDescription("Use this command to see a list of online players on Nations!"),

	async execute(interaction) {

        var onlinePlayers = await fetch("https://shadowevil015.tech/api/v1/onlinePlayers").then(res => res.json()).catch(err => { return err })

     var onlinePlayersName = []

        onlinePlayers.forEach((player) => {
            onlinePlayersName.push(player.name)
        }
    )

    var sortedPlayers = onlinePlayersName.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });

    console.log(sortedPlayers)

    var serverInfo = await fetch("https://shadowevil015.tech/api/v1/serverInfo/").then(res => res.json()).catch(err => { return err })

    var nations = JSON.stringify(serverInfo.nations)

    const players1 = []
    players1.push(sortedPlayers.slice(0, 37))

    const players2 = []
    players2.push(sortedPlayers.slice(38, 75))

    const players3 = []
    
    players3.push(sortedPlayers.slice(76, 113))

       const onlineplayers = new MessageEmbed() // Create a message embed
        .setColor('#EE6123') // Sets the sidebar colour of the embed.
        .setTitle(bold(`Online Players | ${nations}`)) // Sets the main title of the embed, in bold (who woulda guessed?)
        .addFields(
            { name: 'Online Players:', value: inlineCode(players1).replaceAll(/"/g, "").replaceAll(/,/g, "\n").replace(/]/g, "").replace("[", ""), inline: true },
            { name: '\u200B', value: inlineCode(players2).replaceAll(/"/g, "").replaceAll(/,/g, "\n").replace(/]/g, "").replace("[", ""), inline: true },
            { name: '\u200B', value: inlineCode(players3).replaceAll(/"/g, "").replaceAll(/,/g, "\n").replace(/]/g, "").replace("[", ""), inline: true },
    )
        .setTimestamp()
        .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' });

		await interaction.reply({ embeds: [onlineplayers] });
        
	},
};