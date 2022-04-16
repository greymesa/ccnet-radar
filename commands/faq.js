const { SlashCommandBuilder, bold, italic, inlineCode } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('faq')
		.setDescription("Use this command to get an answer from the faq!")
        .addSubcommand(subcommand =>
            subcommand
                .setName('ip')
                .setDescription('A list of the CCNetMC related IP Addresses!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('wiki')
                .setDescription('A link to our wiki!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('resourcepack')
                .setDescription('A link to the CCNet resourcepack!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('map')
                .setDescription('A link to the CCNet Dynmap!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('logs')
                .setDescription('A guide to submitting logs, for use in tickets!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('reboot')
                .setDescription('A guide on what to do, in the event of a server crash!')),

async execute(interaction) {

        const ip = new MessageEmbed() // Create a message embed, called resourcepack.
            .setColor('#EE6123') // Sets the sidebar colour of the embed.
            .setTitle(bold('What is the IP?')) // Sets the main title of the embed, in bold (who woulda guessed?)
            .setDescription(italic('You can use the following IPs to join CCNet:'))
			.addFields(
				{ name: '\u200B', value: '\u200B' }, // Blank row
				{ name: 'Europe:', value: inlineCode("play.ccnetmc.com") },
				//{ name: '\u200B', value: '\u200B' }, // Blank row
                { name: 'NA:', value: inlineCode("na.ccnetmc.com") },
                //{ name: '\u200B', value: '\u200B' }, // Blank row
                { name: 'Asia:', value: inlineCode("asia.ccnetmc.com") },
                { name: '\u200B', value: '\u200B' }, // Blank row
		)
                .setTimestamp() // Sets the current date and time at the bottom of the embed.
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' }) // Footer at the bottom of the embed.


        const wiki = new MessageEmbed() // Create a message embed, called resourcepack.
            .setColor('#EE6123') // Sets the sidebar colour of the embed.
            .setTitle(bold('Wiki')) // Sets the main title of the embed, in bold (who woulda guessed?)
            .setDescription(italic('You can view the wiki via this link:'))
			.addFields(
				{ name: '\u200B', value: '\u200B' }, // Blank row
				{ name: 'Link:', value: '[https://www.dropbox.com/s/312j10m4cw611au/CCNet.zip?dl=1](https://www.dropbox.com/s/312j10m4cw611au/CCNet.zip?dl=1)' },
                { name: '\u200B', value: '\u200B' }, // Blank row
		)
                .setTimestamp() // Sets the current date and time at the bottom of the embed.
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' }) // Footer at the bottom of the embed.

         if (interaction.options.getSubcommand() === "ip") {
            await interaction.reply( {embeds: [ip]} )
        }

        else if (interaction.options.getSubcommand() === "wiki") {
            await interaction.reply( {embeds: [wiki]} )
        }
    },
};