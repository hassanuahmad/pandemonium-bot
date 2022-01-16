const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("forestfinery")
        .setDescription("Replies with information about Forest Finery"),
    async execute(interaction) {
        const embed = new MessageEmbed()
            .setColor("#00594C")
            .setTitle("Forest Finery")
            .setDescription("Plant 20 trees for every item purchased!")
            .setThumbnail("https://i.imgur.com/OpwD4fT.jpg");

        const websiteButton = new MessageActionRow().addComponents(
            new MessageButton()
                .setURL("https://www.forestfinery.com")
                .setLabel("Shop")
                .setStyle("LINK")
        );

        await interaction.reply({
            embeds: [embed],
            components: [websiteButton],
        });
    },
};
