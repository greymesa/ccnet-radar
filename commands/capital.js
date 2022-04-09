const { SlashCommandBuilder, bold, italic } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

// Make a new slash command, in this case, the capital command.
module.exports = {
	data: new SlashCommandBuilder()
		.setName('capital')
		.setDescription("Shows all information about the capital of OE (New Amsterdam)"),

	async execute(interaction) {
		// Fetch the latest data about New Amsterdam from the API, and then convert to JSON.
		var newamst = await fetch("https://ccnet-api.herokuapp.com/api/v1/towns/new_amsterdam").then(res => res.json()).catch(err => { return err })
		var residents = JSON.stringify(newamst.residents) // Make a variable string for the residents of the town.
		var mayor = JSON.stringify(newamst.mayor) // Make a variable string for the mayor of the town.
		var coordinates = JSON.stringify("x: "+newamst.x+", "+"y: "+newamst.z) // Get both the x & y coordinate of the spawn point of the capital, & prefix with x/y.

		const capital = new MessageEmbed() // Create a message embed, called capital.
			.setColor('#0099ff') // Sets the sidebar colour of the embed.
			.setTitle(bold('New Amsterdam')) // Sets the main title of the embed, in bold (who woulda guessed?)
			.setDescription(italic('Information about the capital of OE, New Amsterdam')) // Sets the description of the embed, in italics.
			.addFields(
				{ name: '\u200B', value: '\u200B' }, // Blank row
				{ name: 'Mayor:', value: mayor.replaceAll(/"/g, ""), inline: true }, // Inline title of mayor, and it displays the content of the var "mayor".
				{ name: 'Coords:', value: coordinates.replaceAll(/"/g, ""), inline: true }, // Inline title of coordinates, and it displays the content of the var "coordinates".
				{ name: '\u200B', value: '\u200B' }, // Blank row
		)
			.addField('Residents:', residents.replaceAll(/"/g, "").replaceAll(",", ", "), true) // Inline title of residents, and it removes the JSON symbols from the var "residents".
			.addField('\u200B', '\u200B') // Blank row
			.setTimestamp() // Sets the current date and time at the bottom of the embed.
			.setFooter({ text: 'Bot written by Shadowevil015', iconURL: '' }); // Footer at the bottom of the embed.
        
			await interaction.reply({ embeds: [capital] }); // Reply to the slash command with the created embed.
	},
};