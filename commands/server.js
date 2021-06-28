const {prefix, server_password} = require("../config.json");
module.exports = {
	name: 'server',
	description: 'Information about our CS:GO Server',
	execute(message) {
        setTimeout(() => message.delete(), 2000);
        const embed = {
            title: `Pandemonium Server`,
            description: `Click the link below to join the Pandemonium server\n\nConnect: steam://connect/208.167.251.244:27035\nPassword: **${server_password}**\n\nCopy in console:\n**connect 208.167.251.244:27035;password ${server_password}**`,
            color: 7584788,
            timestamp: new Date(),
            thumbnail: {
                url: "https://i.imgur.com/vHIoeL4.png",
            },
        };
        message.channel.send({ embed });
    },
};