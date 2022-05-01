const { SlashCommandBuilder, bold } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('siegesearch')
		.setDescription("Use this command to select a siege and get detailed information about it!"),

	async execute(interaction) {


        var sieges = await fetch('https://shadowevil015.tech/api/v1/sieges').then(res => res.json()).catch(err => { return err })

        var siegeList = []

        sieges.forEach((siege) => {
            siegeList.push(siege).split(`}`)
        }
    )

        const siege = new MessageEmbed()
            .setColor('#EE6123')
            .setTitle(bold(`placeholder`))
            .addFields(
            { name: '\u200B', value: siegeList.replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
         //   { name: '\u200B', value: .replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
           // { name: '\u200B', value: .replaceAll(/"|]|/g, "").replaceAll(/_/g, " ").replaceAll(/,/g, "\n\n").replace("[", ""), inline: true },
            )
            .setTimestamp()
            .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' });

               await interaction.reply({ embeds: [siege] });

    },
};