const { SlashCommandBuilder } = require('@discordjs/builders');

var fetch = require("node-fetch")

async function getTowns() {
	var towns = await fetch("https://ccnet-api.herokuapp.com/api/v1/towns").then(res => res.json()).catch(err => { return err })
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('towns')
		.setDescription('Replies with all towns in Nations'),
        .addStringOption(option =>
            option.setName('category')
                .)
	async execute(interaction) {
		await interaction.reply(getTowns);
	},
};