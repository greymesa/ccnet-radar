const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

// Make a new slash command, in this case, the capital command.
module.exports = {
	data: new SlashCommandBuilder()
		.setName('town')
		.setDescription("Use this command, with a town name, to find information about it."),

	async execute(interaction) {

		const townname = interaction.options.getString('town name:');
        
        await interaction.reply();

    },
};