const { SlashCommandBuilder, bold, italic } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

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

        var complttown = await fetch("https://shadowevil015.tech/api/v1/towns/"+townname).then(res => res.json()).catch(err => { return err })

		var residents = JSON.stringify(complttown.residents)
		var mayor = JSON.stringify(complttown.mayor)
		var coordinates = JSON.stringify("x: "+complttown.x+", "+"z: "+complttown.z)
		var bank = JSON.stringify(complttown.bank)
		var upkeep = JSON.stringify(complttown.upkeep)
		var nation = JSON.stringify(complttown.nation)
		var peaceful = JSON.stringify(complttown.peacefulness)
	
		let peacefullness;
		if (peaceful == "true"){
			peacefullness = "Peaceful"
		}
		else {
			peacefullness = "Non-Peaceful"
		}

		var inNation = nation.replaceAll(/"/g, "").replaceAll("_", " ").replace(/(^\w|\s\w|\s\_)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase())

		const town = new MessageEmbed() // Create a message embed, called capital.
			.setColor('#EE6123') // Sets the sidebar colour of the embed.
			.setTitle(bold(`${captownname}`)) // Sets the main title of the embed, in bold (who woulda guessed?)
			.setDescription(italic(`Information about ${captownname}, a Member of ${inNation}, which is also ${peacefullness}`)) // Sets the description of the embed, in italics.
			.addFields(
				{ name: '\u200B', value: '\u200B' }, // Blank row
				{ name: 'Mayor:', value: mayor.replaceAll(/"/g, ""), inline: true },
				{ name: 'Coords:', value: coordinates.replaceAll(/"/g, ""), inline: true },
				{ name: '\u200B', value: '\u200B' }, // Blank row
		)
			.addFields(
				{ name: 'Bank:', value: bank.replaceAll(/"/g, ""), inline: true },
				{ name: 'Upkeep:', value: upkeep.replaceAll(/"/g, ""), inline: true },
				{ name: '\u200B', value: '\u200B' }, // Blank row
		)
			.addField('Residents:', residents.replaceAll(/"/g, "").replaceAll(",", ", "))
			.addField('\u200B', '\u200B')
			.setTimestamp()
			.setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' });
        
			await interaction.reply({ embeds: [town] });
	},
};