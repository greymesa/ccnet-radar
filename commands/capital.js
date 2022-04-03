const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');
var ccmc = require("ccnetmc")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('capital')
		.setDescription("Shows all information about the capital of OE (New Amsterdam)"),

	async execute(interaction) {
		var newamst = await fetch("http://earthmcstats.ddns.net/api/v1/towns/Rajkot").then(res => res.json()).catch(err => { return err })
		let first = JSON.stringify(newamst)
		let reduced = first.replaceAll(/]/g, "").replaceAll(/}|{|"/g, "").replaceAll("[", "").replaceAll(",", "\n").replaceAll(":", ": ");
		console.log(first[2])
			await interaction.reply(reduced);
	},
};
