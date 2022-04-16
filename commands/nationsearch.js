const { SlashCommandBuilder, bold, italic } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('nation')
		.setDescription("Use this command, with a nation name, to find information about it.")
        .addStringOption(option =>
            option.setName("name")
                .setDescription("The name of the nation.")
                .setRequired(true)),

	async execute(interaction) {

		const nationname = interaction.options.getString("name");

        var capnationname = nationname.replaceAll("_", " ").replace(/(^\w|\s\w|\s\_)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase())

        var compltnation = await fetch("https://shadowevil015.tech/api/v1/nations/"+nationname).then(res => res.json()).catch(err => { return err })

        var residents = JSON.stringify(compltnation.residents)
        var towns = JSON.stringify(compltnation.towns)
        var king = JSON.stringify(compltnation.king)
        var capital = JSON.stringify(compltnation.capitalName)
        var coordinates = JSON.stringify("x: "+compltnation.capitalX+", "+"z: "+compltnation.capitalZ)

        const middle = residents.length / 3; // if it's odd, it'll round down
        const first = residents.slice(0, middle)
        const last = residents.slice(middle, residents.length);


		const nation = new MessageEmbed() // Create a message embed, called capital.
			.setColor('#EE6123') // Sets the sidebar colour of the embed.
			.setTitle(bold(`${capnationname}`)) // Sets the main title of the embed, in bold (who woulda guessed?)
			.setDescription(italic(`Information about ${capnationname}`)) // Sets the description of the embed, in italics.
			.addFields(
				{ name: '\u200B', value: '\u200B' }, // Blank row
				{ name: 'Leader:', value: king.replaceAll(/"/g, ""), inline: true },
				{ name: 'Coords:', value: coordinates.replaceAll(/"/g, ""), inline: true },
                { name: 'Capital:', value: capital.replaceAll(/"/g, ""), inline: true },
				{ name: '\u200B', value: '\u200B' }, // Blank row
		)
           // .addField('Towns:', .replaceAll(/"/g, "").replaceAll(",", ", "))
			.addField('Residents:', inlineCode(first.replaceAll(/"/g, "").replaceAll(",", ", ")))
			.addField('\u200B', '\u200B')
			.setTimestamp()
			.setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' });
        
			await interaction.reply({ embeds: [nation] });

	},
};