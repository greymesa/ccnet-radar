const { SlashCommandBuilder, bold, inlineCode } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");
const ccmc = require('ccnetmc')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('onlineplayers')
		.setDescription("Use this command to see a list of online players on Nations!")
        .addSubcommand((subcommand) =>
        subcommand.setName('nations').setDescription('Show a list of online players on Nations!'))
        .addSubcommand((subcommand) =>
        subcommand.setName('towny').setDescription('Show a list of online players on Towny!')),

	async execute(interaction) {

    let onlinePlayers = await fetch("https://shadowevil015.tech/api/v1/onlinePlayers/").then(res => res.json()).catch(err => { return err })
    let onlineTownyPlayers = await ccmc.getOnlineTownyPlayerData().then(online => { return online });

    const onlineplayers = new MessageEmbed()
    const onlineTownyPlayersEmbed = new MessageEmbed()

    var onlinePlayersName = []

        onlinePlayers.forEach((player) => {
            onlinePlayersName.push(player.name)
        }
    )

    var onlineTownyPlayersName = []

        onlineTownyPlayers.forEach((player) => {
            onlineTownyPlayersName.push(player.name)
        }
    )

    let sortedPlayers = onlinePlayersName.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });

    let townySortedPlayers = onlineTownyPlayersName.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });

    let serverInfo = await fetch("https://shadowevil015.tech/api/v1/serverInfo/").then(res => res.json()).catch(err => { return err })

    const nations = JSON.stringify(serverInfo.nations)
    const towny = JSON.stringify(serverInfo.towny)

    let strOnlineTownyPlayers = JSON.stringify(townySortedPlayers)

    onlineTownyPlayersEmbed
    .setColor('#EE6123') // Sets the sidebar colour of the embed.
    .setTitle(bold(`Online Players | ${towny}`)) // Sets the main title of the embed, in bold (who woulda guessed?)
    .setTimestamp()
    .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })
    .addFields(
        { name: "\u200B", value: inlineCode(strOnlineTownyPlayers).replaceAll(/"/g, "").replaceAll(/,/g, "\n").replace(/]/g, "").replaceAll("[", "")}
    )

    if (interaction.options.getSubcommand() === 'towny') {
        return interaction.reply({ embeds: [onlineTownyPlayersEmbed] });
    } else if (interaction.options.getSubcommand() === 'nations') {

    const players1 = []

    if (nations >= 1) {
        players1.push(sortedPlayers.slice(0, 37))
        let strp1 = JSON.stringify(players1)
        onlineplayers.addField( 'Online Players:', inlineCode(strp1).replaceAll(/"/g, "").replaceAll(/,/g, "\n").replace(/]/g, "").replaceAll("[", ""), true )}

    const players2 = []

    if (nations >= 36) {
        players2.push(sortedPlayers.slice(38, 75))
        let strp2 = JSON.stringify(players2)
        onlineplayers.addField( '\u200B', inlineCode(strp2).replaceAll(/"/g, "").replaceAll(/,/g, "\n").replace(/]/g, "").replaceAll("[", ""), true )}
    else {}

    const players3 = []
    
    if (nations >= 75) {
        players3.push(sortedPlayers.slice(76, 113))
        let strp3 = JSON.stringify(players3)
        onlineplayers.addField( '\u200B', inlineCode(strp3).replaceAll(/"/g, "").replaceAll(/,/g, "\n").replace(/]/g, "").replaceAll("[", ""), true )}

    else {}

        onlineplayers.setColor('#EE6123') // Sets the sidebar colour of the embed.
        .setTitle(bold(`Online Players | ${nations}`)) // Sets the main title of the embed, in bold (who woulda guessed?)
        .setTimestamp()
        .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' });


        if (nations >= 1) {
		    await interaction.reply( { embeds: [onlineplayers] } )}
        else {
            await interaction.reply( "No players are online! Is the server down?" )
        }}
        
	},
};