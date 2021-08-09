require("dotenv").config();

const Discord = require("discord.js");
let { MessageEmbed } = require("discord.js");
const { prefix, server_password } = require("./config.json");
const memberCounter = require("./counters/member-counter");
// const joinLeave = require("./counters/join-leave");
const fs = require("fs");
const client = new Discord.Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
const commandFiles = fs
    .readdirSync("./commands")
    .filter((file) => file.endsWith(".js"));

client.commands = new Discord.Collection();
client.login(process.env.PANDEMONIUM_BOT_TOKEN);

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once("ready", () => {
    console.log(`${client.user.tag} has logged in.`);
    client.user.setActivity("Serving Pandemonium").catch(console.error);
    memberCounter(client);
    // joinLeave(client);
});

client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply("There was an error trying to execute that command!");
    }
});

client.on("guildMemberAdd", async (member) => {
    const channel = member.guild.channels.cache.get("872000479406723074");
    const embed = new MessageEmbed()
        .setColor("GREEN")
        .setTitle("New Member")
        .setDescription(
            "hi"
            // `**${member.displayName}** welcome to ${member.guild.name}, we now have ${member.guild.memberCount} members!`
        );
    console.log(embed);
    channel.send({ embeds: [embed] });
});

client.on("guildMemberRemove", async (member) => {
    const channel = member.guild.channels.cache.get("872000479406723074");
    const embed = new MessageEmbed()
        .setColor("RED")
        .setTitle("A member left the server")
        .setDescription(
            "hi"
            // `**${member.displayName}** has left ${member.guild.name}, we now have ${member.guild.memberCount} members!`
        );
    console.log(embed);

    channel.send({ embeds: [embed] });
});
