const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');
var ccmc = require("ccnetmc")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('capital')
		.setDescription("Shows all information about the capital of OE (New Amsterdam)"),

	async execute(interaction) {
		var newamst = await fetch("https://ccnet-api.herokuapp.com/api/v1/towns/new_amsterdam").then(res => res.json()).catch(err => { return err })
			await interaction.reply(JSON.stringify(newamst));
	},
};