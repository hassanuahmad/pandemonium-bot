const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ff",
    execute(message) {
        setTimeout(() => message.delete(), 2000);
        const embed = new MessageEmbed()
            .setColor("#00594C")
            .setTitle("Forest Finery")
            .setDescription(
                `Click the link below to support Forest Finery!\n\`Plant 20 trees for every item purchased!\`\n\nhttps://www.forestfinery.com/`
            )
            .setThumbnail("https://i.imgur.com/OpwD4fT.jpg");
        message.channel.send({ embeds: [embed] });
    },
};
