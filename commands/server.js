const { MessageEmbed } = require("discord.js");
const { prefix, server_password } = require("../config.json");

module.exports = {
    name: "server",
    execute(message) {
        setTimeout(() => message.delete(), 2000);
        const embed = new MessageEmbed()
            .setColor("#607D8B")
            .setTitle("Pandemonium Servers")
            .setDescription(
                `
                **5v5 Server**\n\`connect pandepublic1.noob.club:27576\`\n
                **Retakes Server**\n\`connect panderetakes1.noob.club:28408\`\n
                **Private 10man Server**\n\`connect pandeprivate.noob.club:27870;password ${server_password}\`\n              
                `
            )
            .setThumbnail("https://i.imgur.com/vHIoeL4.png");
        message.channel.send({ embeds: [embed] });
    },
};
