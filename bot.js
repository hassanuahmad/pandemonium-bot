require("dotenv").config();

const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
client.commands = new Discord.Collection();
client.login(process.env.PANDEMONIUM_BOT_TOKEN);

fs.readdir("./commands/", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0) {
    console.log("Couldn't find commands!");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
  });
});

//BOT is online and ready -> npm run dev
client.on("ready", () => {
  console.log(`${client.user.tag} has logged in.`);
  client.user.setActivity("Serving Pandemonium").catch(console.error);

  //Get member count
  let myGuild = client.guilds.cache.get("714305139539968013");
  let memberCount = myGuild.memberCount;
  let memberCountChannel = myGuild.channels.cache.get("822902114719236098");
  memberCountChannel.setName("Members: " + memberCount);
});

client.on("guildMemberAdd", (member) => {
  let myGuild = bot.guilds.cache.get("714305139539968013");

  let memberCount = myGuild.memberCount;
  let MemberCountChannel = myGuild.channels.cache.get("822902114719236098");
  MemberCountChannel.setName("Members: " + memberCount);
});

client.on("guildMemberRemove", (member) => {
  let myGuild = bot.guilds.cache.get("714305139539968013");
  let memberCount = myGuild.memberCount;
  let MemberCountChannel = myGuild.channels.cache.get("Y822902114719236098");
  MemberCountChannel.setName("Members: " + memberCount);
});

client.on("message", async (message) => {
  //this is so we who sent the message, not the BOT
  if (message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  //Check for prefix
  if(!cmd.startsWith(config.prefix)) return;

  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,args);

  /* Funny Replies */
  if (message.content.toLowerCase() === "war") {
    message.channel.send("We know Wargasm-OG- is GAY boi");
  }
  if (message.content.toLowerCase() === "hua") {
    message.channel.send("daddy is here, Please behave!");
  }
  if (message.content.toLowerCase() === "behind") {
    message.channel.send("Josh The Asian is behind you with a zeus :middle_finger:");
  }
  if (message.content.toLowerCase() === "justin") {
    message.channel.send("wait, gotta finish this assignment real quick then we can play");
  }
  if (message.content.toLowerCase() === "jorj") {
    message.channel.send("always banned & muted annoying kid! 🔨");
  }
  if (message.content.toLowerCase() === "wheat") {
    message.channel.send("playing for a bit and then sleeping");
  }
  if (message.content.toLowerCase() === "faith") {
    message.channel.send("HUA is better than u in every game so suck it up");
  }
});