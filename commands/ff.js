const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    setTimeout(() => message.delete(), 2000);
    const embed = {
        title: `Forest Finery`,
        description: `Click the link below to support Forest Finery!\n\`Plant 20 trees for every item purchased!\`\n\nhttps://www.forestfinery.com/`,
        color: "#00594c",
        thumbnail: {
            url: "https://i.imgur.com/OpwD4fT.jpg",
        },
    };
    message.channel.send({ embed });
}

module.exports.help = {
    name:"ff"
}