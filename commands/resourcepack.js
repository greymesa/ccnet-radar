const { SlashCommandBuilder, bold, italic } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('resourcepack')
		.setDescription("Use this command to get a link for the CCNet Resource Pack!"),

        async execute(interaction) {

    	const resourcepack = new MessageEmbed() // Create a message embed, called resourcepack.
		    .setColor('#0099ff') // Sets the sidebar colour of the embed.
	    	.setTitle(bold('CCNet Resource Pack')) // Sets the main title of the embed, in bold (who woulda guessed?)
	    	.setDescription(italic('A direct download link to the CCNet Resource Pack')) // Sets the description of the embed, in italics.
	    	.addFields(
                { name: '\u200B', value: '\u200B' }, // Blank row
		    	{ name: 'Link:', value: '[https://www.dropbox.com/s/312j10m4cw611au/CCNet.zip?dl=1](https://www.dropbox.com/s/312j10m4cw611au/CCNet.zip?dl=1)', inline: true },
		    	{ name: '\u200B', value: '\u200B' }, // Blank row
		)
	    	.setTimestamp() // Sets the current date and time at the bottom of the embed.
	    	.setFooter({ text: 'Bot written by Shadowevil015', iconURL: '' }); // Footer at the bottom of the embed.

		await interaction.reply({ embeds: [resourcepack] }); // Reply to the slash command with the created embed.
	},
};