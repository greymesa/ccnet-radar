const { SlashCommandBuilder, bold } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sieges')
		.setDescription("Use this command to see a list of online players on Nations!"),

	async execute(interaction) {

        var sieges = await fetch('https://shadowevil015.tech/api/v1/sieges').then(res => res.json()).catch(err => { return err })
		
		var siegeList = []

        sieges.forEach((siege) => {
            siegeList.push(siege.name)
        }
    )

		var strsieges = JSON.stringify(siegeList)

		const siege = new MessageEmbed()
			.setColor('#EE6123')
			.setTitle(bold(`Current Sieges`))
			.addFields(
				{ name: '\u200B', value: strsieges.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
			)
			.setTimestamp()
			.setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' });

    await interaction.reply({ embeds: [siege] });
        
	},
};