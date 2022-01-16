const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    once: false,
    async execute(client, members) {
        let guild = client.guilds.cache.get("714305139539968013");
        const Channel = client.channels.cache.get("872000479406723074");
        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle("New Homebread")
            .setDescription(
                `**${members.displayName}**, Welcome to Pandemonium!`
            );
        await Channel.send({ embeds: [embed] });
    },
};
