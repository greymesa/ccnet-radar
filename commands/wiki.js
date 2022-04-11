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
                .setDescription('A link to the Runes and Bosses page!'))

        .addSubcommand(subcommand =>
            subcommand
                .setName('brewery')
                .setDescription('A link to the Brewery page!'))

        .addSubcommand(subcommand =>
            subcommand
                .setName('townyplugin')
                .setDescription('A link to the Towny Plugin Guide!'))

        .addSubcommand(subcommand =>
            subcommand
                .setName('siegewar')
                .setDescription('A link to the Siege War Guide!'))

        .addSubcommand(subcommand =>
            subcommand
                .setName('navalsiege')
                .setDescription('A link to the Movecraft Naval Siege Guide!'))

        .addSubcommand(subcommand =>
            subcommand
                .setName('link')
                .setDescription('A link to the Wiki Homepage!')),


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

        const brewery = new MessageEmbed() // Create a message embed, called resourcepack.
        .setColor('#0099ff') // Sets the sidebar colour of the embed.
        .setTitle(bold('Brewery - Fermentation, Distillation, and more!')) // Sets the main title of the embed, in bold (who woulda guessed?)
        .setDescription(italic('Use this article to learn more about Brewery!'))
        .addFields(
           { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Brewery](https://wiki.ccnetmc.com/en/Brewery)', inline: true },
        )
        .setTimestamp() // Sets the current date and time at the bottom of the embed.
        .setFooter({ text: 'Bot written by Shadowevil015', iconURL: '' }) // Footer at the bottom of the embed.

        const townyplugin = new MessageEmbed() // Create a message embed, called resourcepack.
        .setColor('#0099ff') // Sets the sidebar colour of the embed.
        .setTitle(bold('Towny Plugin Starter Guide')) // Sets the main title of the embed, in bold (who woulda guessed?)
        .setDescription(italic('Use this article to learn more about the Towny plugin, used on both Nations and Towny!'))
        .addFields(
           { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Guides/TownyPlugin](https://wiki.ccnetmc.com/en/Guides/TownyPlugin)', inline: true },
        )
        .setTimestamp() // Sets the current date and time at the bottom of the embed.
        .setFooter({ text: 'Bot written by Shadowevil015', iconURL: '' }) // Footer at the bottom of the embed.

        const siegewar = new MessageEmbed() // Create a message embed, called resourcepack.
        .setColor('#0099ff') // Sets the sidebar colour of the embed.
        .setTitle(bold('Siege War Guide')) // Sets the main title of the embed, in bold (who woulda guessed?)
        .setDescription(italic('Use this article to learn more about Sieges on Nations, and how they work!'))
        .addFields(
           { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Nations/WarSieging](https://wiki.ccnetmc.com/en/Nations/WarSieging)', inline: true },
        )
        .setTimestamp() // Sets the current date and time at the bottom of the embed.
        .setFooter({ text: 'Bot written by Shadowevil015', iconURL: '' }) // Footer at the bottom of the embed.

        const navalsiege = new MessageEmbed() // Create a message embed, called resourcepack.
        .setColor('#0099ff') // Sets the sidebar colour of the embed.
        .setTitle(bold('Movecraft Naval Siege Guide')) // Sets the main title of the embed, in bold (who woulda guessed?)
        .setDescription(italic('Use this article to learn more about the Naval Sieges around the Nations map!'))
        .addFields(
           { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Nations/WarNavalSieges](https://wiki.ccnetmc.com/en/Nations/WarNavalSieges)', inline: true },
        )
        .setTimestamp() // Sets the current date and time at the bottom of the embed.
        .setFooter({ text: 'Bot written by Shadowevil015', iconURL: '' }) // Footer at the bottom of the embed.

        const wikilink = new MessageEmbed() // Create a message embed, called resourcepack.
        .setColor('#0099ff') // Sets the sidebar colour of the embed.
        .setTitle(bold('Wiki')) // Sets the main title of the embed, in bold (who woulda guessed?)
        .setDescription(italic('A direct link to the Wiki Homepage!'))
        .addFields(
           { name: 'Link:', value: '[https://wiki.ccnetmc.com/](https://wiki.ccnetmc.com/)', inline: true },
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

            else if (interaction.options.getSubcommand() === "brewery") {
                await interaction.reply( {embeds: [brewery]} )
            }

            else if (interaction.options.getSubcommand() === "townyplugin") {
                await interaction.reply( {embeds: [townyplugin]} )
            }

            else if (interaction.options.getSubcommand() === "siegewar") {
                await interaction.reply( {embeds: [siegewar]} )
            }

            else if (interaction.options.getSubcommand() === "navalsiege") {
                await interaction.reply( {embeds: [navalsiege]} )
            }

            else if (interaction.options.getSubcommand() === "link") {
                await interaction.reply( {embeds: [wikilink]} )
            }
	},
};