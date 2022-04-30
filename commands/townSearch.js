const { SlashCommandBuilder, bold, codeBlock, inlineCode } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('town')
		.setDescription("Use this command, with a town name, to find information about it.")
        .addStringOption(option =>
            option.setName("name")
                .setDescription("The name of the town.")
                .setRequired(true)),

	async execute(interaction) {

		const townname = interaction.options.getString("name");

        var captownname = townname.replaceAll("_", " ").replace(/(^\w|\s\w|\s\_)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase())

        var complttown = await fetch("https://shadowevil015.tech/api/v1/towns/"+townname).then(res => res.json()).catch(err => { return err })

		var residents = JSON.stringify(complttown.residents)
		var mayor = JSON.stringify(complttown.mayor)
		var coordinates = JSON.stringify("x: "+complttown.x+", "+"z: "+complttown.z)
		var coordinatesLink = `https://map.ccnetmc.com/nationsmap/#world;flat;${complttown.x},64,${complttown.z};4`
		var bank = JSON.stringify(complttown.bank)
		var upkeep = JSON.stringify(complttown.upkeep)
		var nation = JSON.stringify(complttown.nation)
		var capNation = nation.replaceAll("_", " ").replace(/(^\w|\s\w|\s\_)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase())
		var peaceful = JSON.stringify(complttown.peacefulness)
		var chunks = JSON.stringify(complttown.area)
		var colourFill = JSON.stringify(complttown.colourCodes.fill).replaceAll(/"/g, "")
	
		let peacefullness;
		if (peaceful == "true"){
			peacefullness = "Peaceful"
		}
		else {
			peacefullness = "Non-Peaceful"
		}

		let codedMayor;
		if (mayor.includes("_")){
			codedMayor = inlineCode(mayor)
		}
		else {
			codedMayor = mayor
		}

		const puppeteer = require("puppeteer");
		puppeteer
			.launch({
				defaultViewport: { // Define the size of the screenshot/headless browser
					width: 500,
					height: 500,
				},
			})
			.then(async (browser) => {
				const page = await browser.newPage();
				await page.goto(coordinatesLink); // Define the url
				await page.waitFor(15000)
				await page.screenshot({path: `${townname}.png`}); // Screenshot and save the file as map.png. The path can be configured
				await browser.close(); // Close the headless browser
			});

		const town = new MessageEmbed() // Create a message embed, called capital.
			.setColor(colourFill) // Sets the sidebar colour of the embed.
			.setTitle(bold(`${captownname} | ${peacefullness}`)) // Sets the main title of the embed, in bold (who woulda guessed?)
			.setThumbnail('https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437')
			.addFields(
				{ name: 'Mayor:', value: codedMayor.replaceAll(/"/g, ""), inline: true },
				{ name: 'Nation:', value: capNation.replaceAll(/"/g, ""), inline: true },
		)
			.addFields(
				{ name: 'Chunks:', value: chunks, inline: true },
				{ name: 'Location:', value: `[${coordinates}](${coordinatesLink})`.replaceAll(/"/g, ""), inline: true },
		)
			.addFields(
				{ name: 'Bank:', value: bank.replaceAll(/"/g, ""), inline: true },
				{ name: 'Upkeep:', value: upkeep.replaceAll(/"/g, ""), inline: true },
		)
			.addField('Residents:', codeBlock(residents.replaceAll(/"/g, "").replaceAll(",", ", ")))
			.addImage(`attachment://${townname}.png`)
			.setTimestamp()
			.setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' });
        
			await interaction.reply({ embeds: [town], files: [`images/${townname}.png`] } );
	},
};