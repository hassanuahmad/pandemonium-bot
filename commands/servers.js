const { SlashCommandBuilder } = require("@discordjs/builders");
const { server_password } = require("../config.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("servers")
        .setDescription("Replies with information about our servers"),
    async execute(interaction) {
        const embed = new MessageEmbed()
            .setColor("#607D8B")
            .setTitle("Pandemonium Servers")
            .setDescription(
                `
                **5V5 SERVER**\n\`connect pandepublic1.noob.club:27576\`\n
                **RETAKES SERVER**\n\`connect panderetakes1.noob.club:28408\`\n
                **FFA DM SERVER**\n\`connect pandeffadm.noob.club:28575\`\n
                **PRIVATE 10MAN SERVER**\n\`connect pandeprivate.noob.club:27870;password ${server_password}\`\n              
                `
            );

        await interaction.reply({
            embeds: [embed],
        });
    },
};
