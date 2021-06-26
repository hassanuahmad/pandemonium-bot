const Discord = require("discord.js");
const config = require("../config.json");
let password = config.server_password;

module.exports.run = async (client, message, args) => {
    setTimeout(() => message.delete(), 2000);
    const embed = {
        title: `Pandemonium Server`,
        description: `Click the link below to join the Pandemonium server\n\nConnect: steam://connect/208.167.251.244:27035\nPassword: **${password}**\n\nCopy in console:\n**connect 208.167.251.244:27035;password ${password}**`,
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