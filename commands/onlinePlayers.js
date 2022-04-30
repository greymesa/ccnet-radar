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

    const players1 = []
    players1.push(sortedPlayers.slice(0, 20))

    const players2 = []
    players2.push(sortedPlayers.slice(21, 41))

    const players3 = []
    
    players3.push(sortedPlayers.slice(42, 62))

    const players4 = []

    if (nations > 61) {
    players4.push(sortedPlayers.slice(63, 83))}
    else {
        players4.push("\u200B")
    }

    const players5 = []

    if (nations >= 83) {
    players5.push(sortedPlayers.slice(84, 104))}
    else {
        players5.push("\u200B")
    }

    const players6 = []

    if (nations >= 104) {
    players6.push(sortedPlayers.slice(105, 125))}
    else {
        players6.push("\u200B")
    }

    var serverInfo = await fetch("https://shadowevil015.tech/api/v1/serverInfo/").then(res => res.json()).catch(err => { return err })

    var nations = JSON.stringify(serverInfo.nations)



       const onlineplayers = new MessageEmbed() // Create a message embed
        .setColor('#EE6123') // Sets the sidebar colour of the embed.
        .setTitle(bold(`Online Players | ${nations}`)) // Sets the main title of the embed, in bold (who woulda guessed?)
        .addFields(
            { name: 'Online Players:', value: inlineCode(players1).replaceAll(/"/g, "").replaceAll(/,/g, "\n").replace(/]/g, "").replace("[", ""), inline: true },
            { name: '\u200B', value: inlineCode(players2).replaceAll(/"/g, "").replaceAll(/,/g, "\n").replace(/]/g, "").replace("[", ""), inline: true },
            { name: '\u200B', value: inlineCode(players3).replaceAll(/"/g, "").replaceAll(/,/g, "\n").replace(/]/g, "").replace("[", ""), inline: true },
            { name: '\u200B', value: inlineCode(players4).replaceAll(/"/g, "").replaceAll(/,/g, "\n").replace(/]/g, "").replace("[", ""), inline: true },
            { name: '\u200B', value: inlineCode(players5).replaceAll(/"/g, "").replaceAll(/,/g, "\n").replace(/]/g, "").replace("[", ""), inline: true },
            { name: '\u200B', value: inlineCode(players6).replaceAll(/"/g, "").replaceAll(/,/g, "\n").replace(/]/g, "").replace("[", ""), inline: true },
    )
        .setTimestamp()
        .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' });

		await interaction.reply({ embeds: [onlineplayers] });
        
	},
};