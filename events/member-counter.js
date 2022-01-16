module.exports = async (client) => {
    let guild = client.guilds.cache.get("714305139539968013");
    setInterval(() => {
        const memberCount = guild.memberCount;
        //Voice Channel ID
        const channel = guild.channels.cache.get("822902114719236098");
        channel.setName(`Members: ${memberCount.toLocaleString()}`);
    }, 5000);
};
