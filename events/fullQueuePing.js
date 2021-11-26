const { MessageEmbed } = require("discord.js");
const { server_password } = require("../config.json");

module.exports = {
    name: "fullQueuePing",
    once: false,
    async execute(client, members) {
        // server id
        let guild = client.guilds.cache.get("714305139539968013");
        // 10man queue 1 voice channel id
        const queue1_10man = guild.channels.cache.get("876262055710167110");
        // 10man chat id
        const chat10man = client.channels.cache.get("876261877011861575");

        if (
            newState.queue1_10man == queue1_10man &&
            queue1_10man.members.length === 1
        ) {
            console.log("hee" + queue1_10man.members.length);

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
            await chat10man.send("<#876262055710167110>", { embeds: [embed] });
        }
    },
};
