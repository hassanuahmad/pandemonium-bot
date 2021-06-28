module.exports = async (client) => {
    let guild = client.guilds.cache.get("714305139539968013");
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.memberCount.get("822902114719236098");
        channel.setName(`Members: ${memberCount.toLocaleString()}`);
    }, 5000);
};