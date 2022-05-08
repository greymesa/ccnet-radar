const { SlashCommandBuilder, bold, inlineCode } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('onlineplayers')
		.setDescription("Use this command to see a list of online players on Nations!"),

	async execute(interaction) {
        const onlinePlayers = await fetch("https://shadowevil015.tech/api/v1/onlinePlayers/").then(res => res.json()).catch(err => { return err });

        let onlinePlayersName = [];
        onlinePlayers.forEach((player) => {
            onlinePlayersName.push(player.name);
        });

        let sortedPlayers = onlinePlayersName.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });

        const serverInfo = await fetch("https://shadowevil015.tech/api/v1/serverInfo/").then(res => res.json()).catch(err => { return err });

        const nations = JSON.stringify(serverInfo.nations);

        let players1 = [];
        let players2 = [];
        let players3 = [];

        if (nations >= 1) {
            players1.push(sortedPlayers.slice(0, 37));
            const strp1 = JSON.stringify(players1);
            onlineplayers.addField('Online Players:', inlineCode(strp1).replaceAll(/"/g, "").replaceAll(/,/g, "\n").replace(/]/g, "").replaceAll("[", ""), true);
        } else if (nations >= 36) {
            players2.push(sortedPlayers.slice(38, 75));
            const strp2 = JSON.stringify(players2);
            onlineplayers.addField('\u200B', inlineCode(strp2).replaceAll(/"/g, "").replaceAll(/,/g, "\n").replace(/]/g, "").replaceAll("[", ""), true);
        } else if (nations >= 75) {
            players3.push(sortedPlayers.slice(76, 113));
            const strp3 = JSON.stringify(players3);
            onlineplayers.addField('\u200B', inlineCode(strp3).replaceAll(/"/g, "").replaceAll(/,/g, "\n").replace(/]/g, "").replaceAll("[", ""), true);
        }

        const onlineplayers = new MessageEmbed()
            .setColor('#EE6123') // Sets the sidebar colour of the embed.
            .setTitle(bold(`Online Players | ${nations}`)) // Sets the main title of the embed, in bold (who woulda guessed?)
            .setTimestamp()
            .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' });

        if (nations >= 1) {
	        await interaction.reply({ embeds: [onlineplayers] });
        } else {
            await interaction.reply("No players are online! Is the server down?");
        }
	},
};