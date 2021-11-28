const { MessageEmbed } = require("discord.js");
const { server_password } = require("../config.json");

module.exports = {
    name: "voiceStateUpdate",
    once: false,
    async execute(client) {
        let guild = client.guilds.cache.get("714305139539968013");
        const vcQueue1 = guild.channels.cache.get("876262055710167110");
        const chat10man = client.channels.cache.get("876261877011861575");

        if (vcQueue1.members.size === 10) {
            const embed = new MessageEmbed()
                .setColor("#607D8B")
                .setTitle("10 Man Queue Filled")
                .setDescription(
                    "*10 Man Queue 1* has reached **10** players! \n Please join the server ASAP \n "
                )
                .addFields({
                    name: "Private 10man Server",
                    value: `\`connect pandeprivate.noob.club:27870;password ${server_password}\``,
                })
                .setThumbnail("https://i.imgur.com/vHIoeL4.png");

            await chat10man.send({
                content: `<#876262055710167110>`,
                embeds: [embed],
            });
        }
    },
};
