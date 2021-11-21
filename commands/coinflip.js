const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "coinflip",
    execute(message) {
        const headTails = ["HEADS", "TAILS"];
        const randHeadTails =
            headTails[Math.floor(Math.random() * headTails.length)];

        const embed = new MessageEmbed()
            .setColor("#607D8B")
            .setTitle("Coin Flip Winner")
            .setDescription(`The winner is **${randHeadTails}**`);
        message.channel.send({ embeds: [embed] });
    },
};
