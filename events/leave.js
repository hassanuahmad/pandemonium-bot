const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "guildMemberRemove",
    once: false,
    async execute(client, members) {
        let guild = client.guilds.cache.get("714305139539968013");
        const Channel = client.channels.cache.get("872000479406723074");
        const embed = new MessageEmbed()
            .setColor("RED")
            .setTitle("Homebread Gone :(")
            .setDescription(
                `**${members.displayName}** has left Pandemonium :(`
            );
        await Channel.send({ embeds: [embed] });
    },
};
