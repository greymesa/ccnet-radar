const { SlashCommandBuilder, bold, italic } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('onlineplayers')
		.setDescription("Use this command to see a list of online players on Nations!"),

	async execute(interaction) {

        var onlinePlayers = await fetch("https://shadowevil015.tech/api/v1/onlinePlayers").then(res => res.json()).catch(err => { return err })
    
        onlinePlayers.forEach((player) => {
            onlinePlayersName =  JSON.stringify(player.name);
        }
    )

    const onlinePlayersName =  JSON.stringify(player.name);    

    var serverInfo = await fetch("https://shadowevil015.tech/api/v1/serverInfo/").then(res => res.json()).catch(err => { return err })

    var nations = JSON.stringify(serverInfo.nations)

        const onlineplayers = new MessageEmbed() // Create a message embed
        .setColor('#EE6123') // Sets the sidebar colour of the embed.
        .setTitle(bold(`Online Players | ${nations}`)) // Sets the main title of the embed, in bold (who woulda guessed?)
        .addFields(
            { name: 'Online Players:', value: onlinePlayersName.replaceAll(/"/g, ""), inline: true },
    )
        .setTimestamp()
        .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' });

		await interaction.reply({ embeds: [onlineplayers] });
        
	},
};