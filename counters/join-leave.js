module.exports =
    ("guildMemberAdd",
    async (member) => {
        const channel = member.guild.channels.cache.get("872000479406723074");
        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle("New Member")
            .setDescription(
                `**${member.displayName}** welcome to ${member.guild.name}, we now have ${member.guild.memberCount} members!`
            );
        channel.send(embed);
    });

module.exports =
    ("guildMemberRemove",
    async (member) => {
        const channel = member.guild.channels.cache.get("872000479406723074");
        const embed = new MessageEmbed()
            .setColor("RED")
            .setTitle("A member has left the server :(")
            .setDescription(
                `**${member.displayName}** has left ${member.guild.name}, we now have ${member.guild.memberCount} members!`
            );
        channel.send(embed);
    });
