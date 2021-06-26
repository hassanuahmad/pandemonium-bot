const Discord = require("discord.js");
const SERVER_PASSWORD = "boomer";

module.exports.run = async (client, message, args) => {
    setTimeout(() => message.delete(), 2000);
    const embed = {
        title: `Pandemonium Server`,
        description: `Click the link below to join the Pandemonium server\n\nConnect: steam://connect/208.167.251.244:27035\nPassword: **${SERVER_PASSWORD}**\n\nCopy in console:\n**connect 208.167.251.244:27035;password ${SERVER_PASSWORD}**`,
        color: 7584788,
        timestamp: new Date(),
        thumbnail: {
            url: "https://i.imgur.com/vHIoeL4.png",
        },
    };
    message.channel.send({ embed });
}

module.exports.help = {
  name:"server"
}