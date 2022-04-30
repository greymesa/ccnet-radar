const { SlashCommandBuilder, bold, inlineCode } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fullmap')
		.setDescription("Use this command to get an image of the dynmap!"),

	async execute(interaction) {

    const puppeteer = require("puppeteer");
        puppeteer
         .launch({ 
          defaultViewport: {    // Define the size of the screenshot/headless browser
            width: 1920,
            height: 1080,
        },
    })
        .then(async (browser) => {
            const page = await browser.newPage();
            await page.goto("https://map.ccnetmc.com/nationsmap/#world;flat;0,64,0;0").setTimeout(func, 9000); // Define the url
            await page.screenshot({ path: "map.png" }); // Screenshot and save the file as map.png. The path can be configured
            await browser.close(); // Close the headless browser
    });

        const map = new MessageEmbed()
        .setColor('#EE6123')
        .setTitle(bold(`placeholder`))
       /* .addFields(
        { name: 'Town:', value: town.replaceAll(/"/g, "").replaceAll(/_/g, " "), inline: true },
        { name: 'Nation:', value: nation.replaceAll(/"/g, "").replaceAll(/_/g, " "), inline: true },
        )*/
        .setTimestamp()
        .setImage('attachment://map.png')
        .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' });

            await interaction.reply({ embeds: [map], files: ['./map.png'] });

    },
};