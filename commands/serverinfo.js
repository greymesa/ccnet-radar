const { SlashCommandBuilder, bold, italic } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('serverinfo')
		.setDescription("Use this command to get data about the CCNet network!"),

	async execute(interaction) {

        var serverInfo = await fetch("https://shadowevil015.tech/api/v1/serverInfo/").then(res => res.json()).catch(err => { return err })

        var network = JSON.stringify(serverInfo.online)
        var towny = JSON.stringify(serverInfo.towny)
        var nations = JSON.stringify(serverInfo.nations)
        var hub = JSON.stringify(serverInfo.hub)

		const serverinfo = new MessageEmbed() // Create a message embed
			.setColor('#EE6123') // Sets the sidebar colour of the embed.
			.setTitle(bold(`CCNetMC`)) // Sets the main title of the embed, in bold (who woulda guessed?)
			.setDescription(italic(`Information about CCNetMC, including player counts,\n and status`)) // Sets the description of the embed, in italics.
			.addFields(
				{ name: '\u200B', value: '\u200B' }, // Blank row
				{ name: 'Towny:', value: towny.replaceAll(/"/g, ""), inline: true },
				{ name: 'Nations:', value: nations.replaceAll(/"/g, ""), inline: true },
				{ name: '\u200B', value: '\u200B' }, // Blank row
		)
			.addFields(
				{ name: 'Hub:', value: hub.replaceAll(/"/g, ""), inline: true },
				{ name: 'Network:', value: network.replaceAll(/"/g, ""), inline: true },
				{ name: '\u200B', value: '\u200B' }, // Blank row
		)

			.setTimestamp()
			.setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' });
        
			await interaction.reply({ embeds: [serverinfo] });
        
	},
};