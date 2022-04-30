const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('onlineplayers')
		.setDescription("Use this command to see a list of online players on Nations!"),

	async execute(interaction) {

        var sieges = await fetch('https://shadowevil015.tech/api/v1/sieges'.name)

    await interaction.reply({ sieges/*embeds: [onlineplayers]*/ });
        
	},
};