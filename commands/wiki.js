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
                .setName('combat')
                .setDescription('A link to the CCNet Warfare Guide!'))

        .addSubcommand(subcommand =>
            subcommand
                .setName('navalsiege')
                .setDescription('A link to the Movecraft Naval Siege Guide!'))

        .addSubcommand(subcommand =>
            subcommand
                .setName('geofeatures')
                .setDescription('A link to the Geopolitical Features Guide!'))

        .addSubcommand(subcommand =>
            subcommand
                .setName('voting')
                .setDescription('A link to the Voting Guide!'))

        .addSubcommand(subcommand =>
            subcommand
                .setName('link')
                .setDescription('A link to the Wiki Homepage!')),


        async execute(interaction) {

        const nationsguide = new MessageEmbed()
        .setColor('#EE6123')
        .setTitle(bold('Nations Starter Guide'))
        .setDescription(italic('Use this guide to learn about the Nations gamemode!'))
        .addFields(
           { name: 'Link:', value: '[https://wiki.ccnetmc.com/Guides/nations-starter-guide](https://wiki.ccnetmc.com/Guides/nations-starter-guide)', inline: true },
        )
        .setTimestamp()
        .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

        const townyguide = new MessageEmbed()
        .setColor('#EE6123')
        .setTitle(bold('Nations Starter Guide'))
        .setDescription(italic('Use this guide to learn about the Towny gamemode!'))
        .addFields(
           { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Guides/towny-starter-guide](https://wiki.ccnetmc.com/en/Guides/towny-starter-guide)', inline: true },
        )
        .setTimestamp()
        .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

        const runes = new MessageEmbed()
        .setColor('#EE6123')
        .setTitle(bold('Runes - Runic Anvil & Rune Bosses'))
        .setDescription(italic('Use this article to learn more about runes!'))
        .addFields(
           { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Slimefun/Runes](https://wiki.ccnetmc.com/en/Slimefun/Runes)', inline: true },
        )
        .setTimestamp()
        .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

        const brewery = new MessageEmbed()
        .setColor('#EE6123')
        .setTitle(bold('Brewery - Fermentation, Distillation, and more!'))
        .setDescription(italic('Use this article to learn more about Brewery!'))
        .addFields(
           { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Brewery](https://wiki.ccnetmc.com/en/Brewery)', inline: true },
        )
        .setTimestamp()
        .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

        const townyplugin = new MessageEmbed()
        .setColor('#EE6123')
        .setTitle(bold('Towny Plugin Starter Guide'))
        .setDescription(italic('Use this article to learn more about the Towny plugin, used on both Nations and Towny!'))
        .addFields(
           { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Guides/TownyPlugin](https://wiki.ccnetmc.com/en/Guides/TownyPlugin)', inline: true },
        )
        .setTimestamp()
        .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

        const siegewar = new MessageEmbed()
        .setColor('#EE6123')
        .setTitle(bold('Siege War Guide'))
        .setDescription(italic('Use this article to learn more about Sieges on Nations, and how they work!'))
        .addFields(
           { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Nations/WarSieging](https://wiki.ccnetmc.com/en/Nations/WarSieging)', inline: true },
        )
        .setTimestamp()
        .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

        const combat = new MessageEmbed()
        .setColor('#EE6123')
        .setTitle(bold('Nations Warfare Guide'))
        .setDescription(italic('Use this article to learn more about Combat on Nations, and how it works!'))
        .addFields(
           { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Nations/WarCombat](https://wiki.ccnetmc.com/en/Nations/WarCombat)', inline: true },
        )
        .setTimestamp()
        .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

        const navalsiege = new MessageEmbed()
        .setColor('#EE6123')
        .setTitle(bold('Movecraft Naval Siege Guide'))
        .setDescription(italic('Use this article to learn more about the Naval Sieges around the Nations map!'))
        .addFields(
           { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Nations/WarNavalSieges](https://wiki.ccnetmc.com/en/Nations/WarNavalSieges)', inline: true },
        )
        .setTimestamp()
        .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

        const geofeatures = new MessageEmbed()
        .setColor('#EE6123')
        .setTitle(bold('Geopolitical Features Guide'))
        .setDescription(italic('Use this article to learn more about the Geopolitical Features on Nations!'))
        .addFields(
           { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Nations/Features](https://wiki.ccnetmc.com/en/Nations/Features)', inline: true },
        )
        .setTimestamp()
        .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

        const voting = new MessageEmbed()
        .setColor('#EE6123')
        .setTitle(bold('Voting Guide'))
        .setDescription(italic('Use this article to learn more about Voting!'))
        .addFields(
           { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Voting](https://wiki.ccnetmc.com/en/Voting)', inline: true },
        )
        .setTimestamp()
        .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

        const wikilink = new MessageEmbed()
        .setColor('#EE6123')
        .setTitle(bold('Wiki'))
        .setDescription(italic('A direct link to the Wiki Homepage!'))
        .addFields(
           { name: 'Link:', value: '[https://wiki.ccnetmc.com/](https://wiki.ccnetmc.com/)', inline: true },
        )
        .setTimestamp()
        .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

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