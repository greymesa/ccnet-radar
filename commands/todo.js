const { SlashCommandBuilder, bold, italic } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('issues')
		.setDescription("Use this command to learn about issues with the bot, and future plans!"),

	async execute(interaction) {

		const issues = new MessageEmbed() // Create a message embed
			.setColor('#EE6123') // Sets the sidebar colour of the embed.
			.setTitle(bold(`To Do List`)) // Sets the main title of the embed, in bold (who woulda guessed?)
			.addFields(
				{ name: '\u200B', value: '\u200B' }, // Blank row
				{ name: 'To Do:', value: `- Implement a command to track sieges (e.g the data found on the dynmap)\n
                                          - Pull from upstream (big changes)
                                          - Look into a /shop command, since shops are shown on the dynmap
                                          - Make the message embeds look better ig`},
				{ name: '\u200B', value: '\u200B' }, // Blank row
		)
			.addFields(
				{ name: 'Issues:', value: `- As far as I know, there are currently no issues.` },
				{ name: '\u200B', value: '\u200B' }, // Blank row
		)

			.setTimestamp()
			.setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' });
        
			await interaction.reply({ embeds: [issues] });

	},
};