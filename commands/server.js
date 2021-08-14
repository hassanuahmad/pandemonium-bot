const { MessageEmbed } = require("discord.js");
const { prefix, server_password } = require("../config.json");

module.exports = {
    name: "server",
    description: "Information about our CS:GO Server",
    execute(message) {
        setTimeout(() => message.delete(), 2000);
        const embed = new MessageEmbed()
            .setColor("#607D8B")
            .setTitle("Pandemonium Servers")
            .setDescription(
                `
                **Public Server**\n\`pandepublic1.noob.club:27576\`\n
                **Retakes Server**\n\`panderetakes1.noob.club:28408\`\n
                **Private Server**\n\`pandeprivate.noob.club:27870;password ${server_password}\`\n              
                `
            )
            .setThumbnail("https://i.imgur.com/vHIoeL4.png");
        message.channel.send({ embeds: [embed] });
    },
};
