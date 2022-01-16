const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("coinflip")
        .setDescription("Randomly replies with Heads or Tails"),
    async execute(interaction) {
        const heads_tails_names = ["HEADS", "TAILS"];
        const random_heads_tails =
            heads_tails_names[
                Math.floor(Math.random() * heads_tails_names.length)
            ];

        const embed = new MessageEmbed()
            .setColor("#607D8B")
            .setTitle("Coin Flip Winner")
            .setDescription(`The winner is **${random_heads_tails}**`);

        await interaction.reply({ embeds: [embed] });
    },
};
