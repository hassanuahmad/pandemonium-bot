require("dotenv").config();

const Discord = require("discord.js");
const {prefix, server_password} = require("./config.json");
const fs = require("fs");
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"],});
client.commands = new Discord.Collection();
client.login(process.env.PANDEMONIUM_BOT_TOKEN);

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log(`${client.user.tag} has logged in.`);
	client.user.setActivity("Serving Pandemonium").catch(console.error);
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}
});

// //BOT is online and ready -> npm run dev
// client.on("ready", () => {
//   console.log(`${client.user.tag} has logged in.`);
//   client.user.setActivity("Serving Pandemonium").catch(console.error);

//   //Get member count
//   let myGuild = client.guilds.cache.get("714305139539968013");
//   let memberCount = myGuild.memberCount;
//   let memberCountChannel = myGuild.channels.cache.get("822902114719236098");
//   memberCountChannel.setName("Members: " + memberCount);
// });

// //Add memeber to the counter
// client.on("guildMemberAdd", (member) => {
//   let myGuild = bot.guilds.cache.get("714305139539968013");

//   let memberCount = myGuild.memberCount;
//   let MemberCountChannel = myGuild.channels.cache.get("822902114719236098");
//   MemberCountChannel.setName("Members: " + memberCount);
// });

// //Remove memeber from the counter
// client.on("guildMemberRemove", (member) => {
//   let myGuild = bot.guilds.cache.get("714305139539968013");
//   let memberCount = myGuild.memberCount;
//   let MemberCountChannel = myGuild.channels.cache.get("Y822902114719236098");
//   MemberCountChannel.setName("Members: " + memberCount);
// });