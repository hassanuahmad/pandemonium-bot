const { MessageEmbed } = require("discord.js");
const { basicRole } = require("../config.json");

module.exports = {
    name: "guildMemberRemove",
    once: false,
    async execute(client, members) {
        let guild = client.guilds.cache.get("714305139539968013");
        const Channel = client.channels.cache.get("872000479406723074");
        const generalRole = guild.roles.cache.get(basicRole);
        const embed = new MessageEmbed()
            .setColor("RED")
            .setTitle(`Farewell ${generalRole.name}`)
            .setDescription(`${members.name} has left Pandemonium`);

        await Channel.send({ embeds: [embed] });
    },
};
