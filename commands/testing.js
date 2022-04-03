const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');
var ccmc = require("ccnetmc")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('testcapital')
		.setDescription("Shows all information about the capital of OE (New Amsterdam)"),

	async execute(interaction) {
		var newamst = await fetch("http://earthmcstats.ddns.net/api/v1/towns/Rajkot").then(res => res.json()).catch(err => { return err })

        
        console.log(newamst.name)
        
			await interaction.reply("done");
	},
};