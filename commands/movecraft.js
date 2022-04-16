const { SlashCommandBuilder, bold, italic } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('movecraft')
		.setDescription("Use this command to get a link for a specific Movecraft Ship page!")
        .addSubcommand(subcommand =>
            subcommand
                .setName('aircraftcarrier')
                .setDescription('A link to the Aircraft Carrier craft page!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('bomber')
                .setDescription('A link to the Bomber craft page!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('caraval')
                .setDescription('A link to the Caravel craft page!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('cargoship')
                .setDescription('A link to the Cargo Ship craft page!'))  
        .addSubcommand(subcommand =>
            subcommand
                .setName('cog')
                .setDescription('A link to the Cog craft page!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('corvette')
                .setDescription('A link to the Corvette craft page!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('cruiser')
                .setDescription('A link to the Cruiser craft page!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('depthcharge')
                .setDescription('A link to the Depth Charge page!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('destroyer')
                .setDescription('A link to the Destroyer craft page!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('dreadnought')
                .setDescription('A link to the Dreadnought craft page!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('eastindiaman')
                .setDescription('A link to the East Indiaman craft page!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('elevator')
                .setDescription('A link to the Elevator page!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('fighter')
                .setDescription('A link to the Fighter craft page!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('heavytank')
                .setDescription('A link to the Heavy Tank craft page!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('icebreaker')
                .setDescription('A link to the Icebreaker craft page!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('ifv')
                .setDescription('A link to the IFV (Infantry Fighting Vehicle) craft page!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('landingcraft')
                .setDescription('A link to the Landing Craft page!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('shipyard')
                .setDescription('A link to the Shipyard page!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('submarine')
                .setDescription('A link to the Submarine craft page!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('tank')
                .setDescription('A link to the Tank craft page!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('torpedo')
                .setDescription('A link to the Torpedo page!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('train')
                .setDescription('A link to the Train craft page!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('truck')
                .setDescription('A link to the Truck craft page!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('turret')
                .setDescription('A link to the Turret page!'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('zeppelin')
                .setDescription('A link to the Zeppelin craft page!')),

        async execute(interaction) {

                const aircraftcarrier = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('Aircraft Carrier'))
                .setDescription(italic('Use this link to learn about the Aircraft Carrier!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/AircraftCarrier](https://wiki.ccnetmc.com/en/Movecraft/Nations/AircraftCarrier)', inline: true },)
                .setImage('https://wiki.ccnetmc.com/nations/ships/aircraft_carrier.png')
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const bomber = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('Bomber'))
                .setDescription(italic('Use this link to learn about the Bomber!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/Bomber](https://wiki.ccnetmc.com/en/Movecraft/Nations/Bomber)', inline: true },)
                .setImage('https://wiki.ccnetmc.com/nations/ships/bomber2.png')
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const caravel = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('Caravel'))
                .setDescription(italic('Use this link to learn about the Caravel!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/Caravel](https://wiki.ccnetmc.com/en/Movecraft/Nations/Caravel)', inline: true },)
                .setImage('https://wiki.ccnetmc.com/nations/ships/caravel2.png')
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const cargoship = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('Cargo Ship'))
                .setDescription(italic('Use this link to learn about the Cargo Ship!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/CargoShip](https://wiki.ccnetmc.com/en/Movecraft/Nations/CargoShip)', inline: true },)
                .setImage('https://wiki.ccnetmc.com/nations/ships/cargo_ship.png')
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const cog = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('Cog'))
                .setDescription(italic('Use this link to learn about the Cog!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/Cog](https://wiki.ccnetmc.com/en/Movecraft/Nations/Cog)', inline: true },)
                .setImage('https://wiki.ccnetmc.com/nations/ships/cog2.png')
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const corvette = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('Corvette'))
                .setDescription(italic('Use this link to learn about the Corvette!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/Corvette](https://wiki.ccnetmc.com/en/Movecraft/Nations/Corvette)', inline: true },)
                .setImage('https://wiki.ccnetmc.com/nations/ships/corvette.png')
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const cruiser = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('Cruiser'))
                .setDescription(italic('Use this link to learn about the Cruiser!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/Cruiser](https://wiki.ccnetmc.com/en/Movecraft/Nations/Cruiser)', inline: true },)
                .setImage('https://wiki.ccnetmc.com/nations/ships/cruiser.png')
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const depthcharge = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('Depth Charge'))
                .setDescription(italic('Use this link to learn about the Depth Charge!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/DepthCharge](https://wiki.ccnetmc.com/en/Movecraft/Nations/DepthCharge)', inline: true },)
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const destroyer = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('Destroyer'))
                .setDescription(italic('Use this link to learn about the Destroyer!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/Destroyer](https://wiki.ccnetmc.com/en/Movecraft/Nations/Destroyer)', inline: true },)
                .setImage('https://wiki.ccnetmc.com/nations/ships/destroyer2.png')
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const dreadnought = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('Dreadnought'))
                .setDescription(italic('Use this link to learn about the Dreadnought!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/Dreadnought](https://wiki.ccnetmc.com/en/Movecraft/Nations/Dreadnought)', inline: true },)
                .setImage('https://wiki.ccnetmc.com/nations/ships/dreadnought.png')
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const eastindiaman = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('East Indiaman'))
                .setDescription(italic('Use this link to learn about the East Indiaman!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/EastIndiaman](https://wiki.ccnetmc.com/en/Movecraft/Nations/EastIndiaman)', inline: true },)
                .setImage('https://wiki.ccnetmc.com/nations/ships/east_indiaman2.png')
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const elevator = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('Elevator'))
                .setDescription(italic('Use this link to learn about the Elevator!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/Elevator](https://wiki.ccnetmc.com/en/Movecraft/Nations/Elevator)', inline: true },)
                .setImage('https://wiki.ccnetmc.com/nations/ships/elevator-aircraft-carrier.png')
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const fighter = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('Fighter'))
                .setDescription(italic('Use this link to learn about the Fighter!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/Fighter](https://wiki.ccnetmc.com/en/Movecraft/Nations/Fighter)', inline: true },)
                .setImage('https://wiki.ccnetmc.com/nations/ships/fighter.png')
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const heavytank = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('Heavy Tank'))
                .setDescription(italic('Use this link to learn about the Heavy Tank!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/TankHeavy](https://wiki.ccnetmc.com/en/Movecraft/Nations/TankHeavy)', inline: true },)
                .setImage('https://wiki.ccnetmc.com/nations/ships/heavy_tank.png')
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const icebreaker = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('Icebreaker'))
                .setDescription(italic('Use this link to learn about the Icebreaker!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/Icebreaker](https://wiki.ccnetmc.com/en/Movecraft/Nations/Icebreaker)', inline: true },)
                .setImage('https://wiki.ccnetmc.com/nations/ships/icebreaker2.png')
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const ifv = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('(IFV) Infantry Fighting Vehicle'))
                .setDescription(italic('Use this link to learn about the (IFV) Infantry Fighting Vehicle!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/IFV](https://wiki.ccnetmc.com/en/Movecraft/Nations/IFV)', inline: true },)
                .setImage('https://wiki.ccnetmc.com/nations/ships/ifv.png')
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const landingcraft = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('Landing Craft'))
                .setDescription(italic('Use this link to learn about the Landing Craft!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/LandingCraft](https://wiki.ccnetmc.com/en/Movecraft/Nations/LandingCraft)', inline: true },)
                .setImage('https://wiki.ccnetmc.com/nations/ships/landingcraft.png')
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const shipyard = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('Shipyards'))
                .setDescription(italic('Use this link to learn about Shipyards!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/Shipyard](https://wiki.ccnetmc.com/en/Movecraft/Nations/Shipyard)', inline: true },)
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const submarine = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('Submarine'))
                .setDescription(italic('Use this link to learn about the Submarine!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/Submarine](https://wiki.ccnetmc.com/en/Movecraft/Nations/Submarine)', inline: true },)
                .setImage('https://wiki.ccnetmc.com/nations/ships/submarine.png')
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const tank = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('Tank'))
                .setDescription(italic('Use this link to learn about the Tank!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/Tank](https://wiki.ccnetmc.com/en/Movecraft/Nations/Tank)', inline: true },)
                .setImage('https://wiki.ccnetmc.com/nations/ships/tank.png')
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const torpedo = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('Torpedo'))
                .setDescription(italic('Use this link to learn about Torpedos!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/Torpedo](https://wiki.ccnetmc.com/en/Movecraft/Nations/Torpedo)', inline: true },)
                .setImage('https://wiki.ccnetmc.com/nations/ships/torpedo.png')
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const train = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('Train'))
                .setDescription(italic('Use this link to learn about the Train!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/Train](https://wiki.ccnetmc.com/en/Movecraft/Nations/Train)', inline: true },)
                .setImage('https://wiki.ccnetmc.com/nations/ships/train.png')
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const truck = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('Truck'))
                .setDescription(italic('Use this link to learn about the Truck!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/Truck](https://wiki.ccnetmc.com/en/Movecraft/Nations/Truck)', inline: true },)
                .setImage('https://wiki.ccnetmc.com/nations/ships/truck.png')
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const turret = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('Turret'))
                .setDescription(italic('Use this link to learn about the Turret!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/Turret](https://wiki.ccnetmc.com/en/Movecraft/Nations/Turret)', inline: true },)
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

                const zeppelin = new MessageEmbed()
                .setColor('#EE6123')
                .setTitle(bold('Zeppelin'))
                .setDescription(italic('Use this link to learn about the Zeppelin!'))
                .addFields(
                    { name: 'Link:', value: '[https://wiki.ccnetmc.com/en/Movecraft/Nations/Zeppelin](https://wiki.ccnetmc.com/en/Movecraft/Nations/Zeppelin)', inline: true },)
                .setImage('https://wiki.ccnetmc.com/nations/ships/zeppelin2.png')
                .setTimestamp()
                .setFooter({ text: 'Bot written by Shadowevil015', iconURL: 'https://minecraft-mp.com/images/favicon/204623.png?ts=1615034437' })

         if (interaction.options.getSubcommand() === "aircraftcarrier") {
             await interaction.reply( {embeds: [aircraftcarrier]} )
         }

         else if (interaction.options.getSubcommand() === "bomber") {
             await interaction.reply( {embeds: [bomber]} )
         }

         else if (interaction.options.getSubcommand() === "caravel") {
            await interaction.reply( {embeds: [caravel]} )
        }

         else if (interaction.options.getSubcommand() === "cargoship") {
            await interaction.reply( {embeds: [cargoship]} )
        }

        else if (interaction.options.getSubcommand() === "cog") {
            await interaction.reply( {embeds: [cog]} )
        }

        else if (interaction.options.getSubcommand() === "corvette") {
            await interaction.reply( {embeds: [corvette]} )
        }

        else if (interaction.options.getSubcommand() === "cruiser") {
            await interaction.reply( {embeds: [cruiser]} )
        }

        else if (interaction.options.getSubcommand() === "depthcharge") {
            await interaction.reply( {embeds: [depthcharge]} )
        }

        else if (interaction.options.getSubcommand() === "destroyer") {
            await interaction.reply( {embeds: [destroyer]} )
        }

        else if (interaction.options.getSubcommand() === "dreadnought") {
            await interaction.reply( {embeds: [dreadnought]} )
        }

        else if (interaction.options.getSubcommand() === "eastindiaman") {
            await interaction.reply( {embeds: [eastindiaman]} )
        }

        else if (interaction.options.getSubcommand() === "elevator") {
            await interaction.reply( {embeds: [elevator]} )
        }

        else if (interaction.options.getSubcommand() === "fighter") {
            await interaction.reply( {embeds: [fighter]} )
        }

        else if (interaction.options.getSubcommand() === "heavytank") {
            await interaction.reply( {embeds: [heavytank]} )
        }

        else if (interaction.options.getSubcommand() === "icebreaker") {
            await interaction.reply( {embeds: [icebreaker]} )
        }

        else if (interaction.options.getSubcommand() === "ifv") {
            await interaction.reply( {embeds: [ifv]} )
        }

        else if (interaction.options.getSubcommand() === "landingcraft") {
            await interaction.reply( {embeds: [landingcraft]} )
        }

        else if (interaction.options.getSubcommand() === "shipyard") {
            await interaction.reply( {embeds: [shipyard]} )
        }

        else if (interaction.options.getSubcommand() === "submarine") {
            await interaction.reply( {embeds: [submarine]} )
        }

        else if (interaction.options.getSubcommand() === "tank") {
            await interaction.reply( {embeds: [tank]} )
        }

        else if (interaction.options.getSubcommand() === "torpedo") {
            await interaction.reply( {embeds: [torpedo]} )
        }

        else if (interaction.options.getSubcommand() === "train") {
            await interaction.reply( {embeds: [train]} )
        }

        else if (interaction.options.getSubcommand() === "truck") {
            await interaction.reply( {embeds: [truck]} )
        }

        else if (interaction.options.getSubcommand() === "turret") {
            await interaction.reply( {embeds: [turret]} )
        }

        else if (interaction.options.getSubcommand() === "zeppelin") {
            await interaction.reply( {embeds: [zeppelin]} )
        }
    },
};