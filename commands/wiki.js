const { SlashCommandBuilder, bold, italic } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wiki')
		.setDescription("Use this command to get a link for a specific wiki page!")
        .addSubcommand(subcommand =>
            subcommand
                .setName('nationsguide')
                .setDescription('A link to the Nations Starter Guide!'))
        
        .addSubcommand(subcommand =>
            subcommand
                .setName('townyguide')
                .setDescription('A link to the Towny Starter Guide!'))

        .addSubcommand(subcommand =>
            subcommand
                .setName('runes')
                .setDescription('A link to the Runes and Bosses page!')),


        async execute(interaction) {

        const nationsguide = new MessageEmbed() // Create a message embed, called resourcepack.
        .setColor('#0099ff') // Sets the sidebar colour of the embed.
        .setTitle(bold('Nations Starter Guide')) // Sets the main title of the embed, in bold (who woulda guessed?)
        .setDescription(italic('Use this guide to learn about the Nations gamemode!'))
        .addFields(
           { name: 'Link:', value: '[https://wiki.ccnetmc.com/Guides/nations-starter-guide](https://wiki.ccnetmc.com/Guides/nations-starter-guide)', inline: true },
        )
        .setTimestamp() // Sets the current date and time at the bottom of the embed.
        .setFooter({ text: 'Bot written by Shadowevil015', iconURL: '' }) // Footer at the bottom of the embed.

        const townyguide = new MessageEmbed() // Create a message embed, called resourcepack.
        .setColor('#0099ff') // Sets the sidebar colour of the embed.
        .setTitle(bold('Nations Starter Guide')) // Sets the main title of the embed, in bold (who woulda guessed?)
        .setDescription(italic('Use this guide to learn about the Towny gamemode!'))
        .addFields(
           { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Guides/towny-starter-guide](https://wiki.ccnetmc.com/en/Guides/towny-starter-guide)', inline: true },
        )
        .setTimestamp() // Sets the current date and time at the bottom of the embed.
        .setFooter({ text: 'Bot written by Shadowevil015', iconURL: '' }) // Footer at the bottom of the embed.

        const runes = new MessageEmbed() // Create a message embed, called resourcepack.
        .setColor('#0099ff') // Sets the sidebar colour of the embed.
        .setTitle(bold('Runes - Runic Anvil & Rune Bosses')) // Sets the main title of the embed, in bold (who woulda guessed?)
        .setDescription(italic('Use this article to learn more about runes!'))
        .addFields(
           { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Slimefun/Runes](https://wiki.ccnetmc.com/en/Slimefun/Runes)', inline: true },
        )
        .setTimestamp() // Sets the current date and time at the bottom of the embed.
        .setFooter({ text: 'Bot written by Shadowevil015', iconURL: '' }) // Footer at the bottom of the embed.

            if (interaction.options.getSubcommand() === "nationsguide") {
                await interaction.reply( {embeds: [nationsguide]} )
            }

            else if (interaction.options.getSubcommand() === "townyguide") {
                await interaction.reply( {embeds: [townyguide]} )
            }

            else if (interaction.options.getSubcommand() === "runes") {
                await interaction.reply( {embeds: [runes]} )
            }
	},
};