require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
const PREFIX = "!";
client.login(process.env.PANDEMONIUM_BOT_TOKEN);

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
  // if (message.author.bot) return;
  if (message.author.client) return;

  if (message.content === "gay") {
    message.channel.send("We know Wargasm-OG- is GAY boi");
  }

  //splitting the command and and the args
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);

    //Knife Command (Basically flip a coin)
    if (CMD_NAME === "veto") {
      const maps = [
        "Mirage",
        "Dust 2",
        "Inferno",
        "Nuke",
        "Train",
        "Overpass",
        "Vertigo",
      ];
      //random head and tails
      function doRandHT() {
        var rand = ["**```HEADS```**", "**```TAILS```**"];
        return rand[Math.floor(Math.random() * rand.length)];
      }

      //printing the HT winner show the welcome line
      const embed = {
        title:
          `Welcome to Pandemonium GAYMENS!\n\nKnife Round Winner: ` +
          doRandHT(),
        description: `**VETO** Winner vetos first map\nReact with ✅ on the last map`,
        color: 7584788,
        timestamp: new Date(),
        thumbnail: {
          url: "https://i.imgur.com/vHIoeL4.png",
        },
      };
      message.channel.send({ embed });

      //putting the maps in different lines and giving them the -1 reaction and then deleting it
      for (let i = 0; i < maps.length; i++) {
        const mapLines = await message.channel.send(maps[i]);
        mapLines.react("✅");
        mapLines.react("❌");
      }
    } //end of veto command

    if (CMD_NAME == "server") {
      setTimeout(() => message.delete(), 2000);
      const embed = {
        title: `Pandemonium Server`,
        description: `Click the link below to join the Pandemonium server\n\nConnect: steam://connect/208.167.251.244:27035\nPassword: **chaos**\n\nCopy in console:\n**connect 208.167.251.244:27035;password chaos**`,
        color: 7584788,
        timestamp: new Date(),
        thumbnail: {
          url: "https://i.imgur.com/vHIoeL4.png",
        },
      };
      message.channel.send({ embed });
    } //end of server command

    if (CMD_NAME == "ff") {
      setTimeout(() => message.delete(), 2000);
      const embed = {
        title: `Forest Finery`,
        description: `Click the link below to support Forest Finery!\n\`Plant 20 trees for every item purchased!\`\n\nhttps://www.forestfinery.com/`,
        color: "#00594c",
        thumbnail: {
          url: "https://i.imgur.com/OpwD4fT.jpg",
        },
      };
      message.channel.send({ embed });
    } //end of ff command
  }
});

client.on("messageReactionAdd", async (reaction, user) => {
  const message = reaction.message;
  if (message.author.id == user.id) return;
  if (reaction.emoji.name == "❌") reaction.message.delete();
  if (reaction.emoji.name == "✅") {
    setTimeout(() => message.delete(), 2000);
    await client.channels.fetch("830954302658445362");
    let channel = client.channels.cache.get("830954302658445362");
    channel.messages
      .fetch({ limit: 1 })
      .then((messages) => {
        let lastMessage = messages.first();

        if (lastMessage.author.client) {
          const embed = {
            title: `Map is \`${lastMessage}\``,
            description: `Click the link below to join the Pandemonium server\n\nConnect: steam://connect/208.167.251.244:27035\nPassword: **chaos**\n\nCopy in console:\n**connect 208.167.251.244:27035;password chaos**`,
            color: 7584788,
            thumbnail: {
              url: "https://i.imgur.com/BFtfLbo.jpg[/img]",
            },
            timestamp: new Date(),
            footer: {
              text: "Please join the server in 5min",
              icon_url: "https://i.imgur.com/vHIoeL4.png",
            },
          };
          message.channel.send({ embed });
        }
      })
      .catch(console.error);
  } //end of the ✅ reaction if statemtn
}); //end of the "messageReactionAdd" listner

