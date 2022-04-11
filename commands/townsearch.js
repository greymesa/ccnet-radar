const { SlashCommandBuilder, bold, italic } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

// Make a new slash command, in this case, the capital command.
module.exports = {
	data: new SlashCommandBuilder()
		.setName('town')
		.setDescription("Use this command, with a town name, to find information about it.")
        .addStringOption(option =>
            option.setName("name")
                .setDescription("The name of the town.")
                .setRequired(true)),

	async execute(interaction) {

		const townname = interaction.options.getString("name");

        var captownname = townname.replaceAll("_", " ").replace(/(^\w|\s\w|\s\_)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase())

        var complttown = await fetch("https://ccnet-api.herokuapp.com/api/v1/towns/"+townname).then(res => res.json()).catch(err => { return err })

		var residents = JSON.stringify(complttown.residents) // Make a variable string for the residents of the town.
		var mayor = JSON.stringify(complttown.mayor) // Make a variable string for the mayor of the town.
		var coordinates = JSON.stringify("x: "+complttown.x+", "+"y: "+complttown.z) // Get both the x & y coordinate of the spawn point of the capital, & prefix with x/y.
		var bank = JSON.stringify(complttown.bank)
		var upkeep = JSON.stringify(complttown.upkeep)
		var nation = JSON.stringify(complttown.nation)

		var inNation = nation.replaceAll(/"/g, "").replaceAll("_", " ").replace(/(^\w|\s\w|\s\_)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase())

		const town = new MessageEmbed() // Create a message embed, called capital.
			.setColor('#0099ff') // Sets the sidebar colour of the embed.
			.setTitle(bold(`${captownname} (Member of ${inNation})`)) // Sets the main title of the embed, in bold (who woulda guessed?)
			.setDescription(italic('Information about '+captownname)) // Sets the description of the embed, in italics.
			.addFields(
				{ name: '\u200B', value: '\u200B' }, // Blank row
				{ name: 'Mayor:', value: mayor.replaceAll(/"/g, ""), inline: true }, // Inline title of mayor, and it displays the content of the var "mayor".
				{ name: 'Coords:', value: coordinates.replaceAll(/"/g, ""), inline: true },
				{ name: '\u200B', value: '\u200B' }, // Blank row
		)
			.addFields(
				{ name: 'Bank:', value: bank.replaceAll(/"/g, ""), inline: true },
				{ name: 'Upkeep:', value: upkeep.replaceAll(/"/g, ""), inline: true },
				{ name: '\u200B', value: '\u200B' }, // Blank row
		)
			.addField('Residents:', residents.replaceAll(/"/g, "").replaceAll(",", ", ")) // Inline title of residents, and it removes the JSON symbols from the var "residents".
			.addField('\u200B', '\u200B') // Blank row
			.setTimestamp() // Sets the current date and time at the bottom of the embed.
			.setFooter({ text: 'Bot written by Shadowevil015', iconURL: '' }); // Footer at the bottom of the embed.
        
			await interaction.reply({ embeds: [town] }); // Reply to the slash command with the created embed.
	},
};