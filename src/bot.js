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
});

client.on("message", async (message) => {
  //this is so we who sent the message, not the BOT
  if (message.author.bot) return;

  if (message.content === "gay") {
    message.channel.send("We know Wargasm-OG- is GAY boi");
  }

  //splitting the command and and the args
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);

    //Knife Command (Basically clip a coin)
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
  }
});

client.on("messageReactionAdd", async (reaction, user) => {
  const message = reaction.message;
  if (message.author.id == user.id) return;
  if (reaction.emoji.name == "❌") reaction.message.delete();
  if (reaction.emoji.name == "✅") {
    setTimeout(() => message.delete(), 2000);
    await client.channels.fetch("818174578039586836");
    let channel = client.channels.cache.get("818174578039586836");
    channel.messages
      .fetch({ limit: 1 })
      .then((messages) => {
        let lastMessage = messages.first();

        if (lastMessage.author.client) {
          if (lastMessage.content === "Mirage") {
            const embed = {
              title: `Map is \`${lastMessage}\``,
              description: `Click the link below to join the Pandemonium server\n\nConnect: steam://connect/208.167.251.244:27035\nPassword: **Pandemonium**\n\nCopy in console:\n**connect 208.167.251.244:27035;password Pandemonium**`,
              color: 7584788,
              thumbnail: {
                url: "https://i.imgur.com/LspvXhH.jpg",
              },
              timestamp: new Date(),
              footer: {
                text: "Please join the server in 5min",
                icon_url: "https://i.imgur.com/vHIoeL4.png",
              },
            };
            message.channel.send({ embed });
          } else if (lastMessage.content === "Dust 2") {
            const mapDust2 = {
              title: `Map is \`${lastMessage}\``,
              description: `Click the link below to join the Pandemonium server\n\nConnect: steam://connect/208.167.251.244:27035\nPassword: **Pandemonium**\n\nCopy in console:\n**connect 208.167.251.244:27035;password Pandemonium**`,
              color: 7584788,
              thumbnail: {
                url: "https://i.imgur.com/h8YLmAM.jpg",
              },
              timestamp: new Date(),
              footer: {
                text: "Please join the server in 5min",
                icon_url: "https://i.imgur.com/vHIoeL4.png",
              },
            };
            message.channel.send({ embed: mapDust2 });
          } else if (lastMessage.content === "Inferno") {
            const mapInferno = {
              title: `Map is \`${lastMessage}\``,
              description: `Click the link below to join the Pandemonium server\n\nConnect: steam://connect/208.167.251.244:27035\nPassword: **Pandemonium**\n\nCopy in console:\n**connect 208.167.251.244:27035;password Pandemonium**`,
              color: 7584788,
              thumbnail: {
                url: "https://i.imgur.com/cpH8vnd.jpg",
              },
              timestamp: new Date(),
              footer: {
                text: "Please join the server in 5min",
                icon_url: "https://i.imgur.com/vHIoeL4.png",
              },
            };
            message.channel.send({ embed: mapInferno });
          } else if (lastMessage.content === "Nuke") {
            const mapNuke = {
              title: `Map is \`${lastMessage}\``,
              description: `Click the link below to join the Pandemonium server\n\nConnect: steam://connect/208.167.251.244:27035\nPassword: **Pandemonium**\n\nCopy in console:\n**connect 208.167.251.244:27035;password Pandemonium**`,
              color: 7584788,
              thumbnail: {
                url: "https://i.imgur.com/8ERmYwv.jpg",
              },
              timestamp: new Date(),
              footer: {
                text: "Please join the server in 5min",
                icon_url: "https://i.imgur.com/vHIoeL4.png",
              },
            };
            message.channel.send({ embed: mapNuke });
          } else if (lastMessage.content === "Overpass") {
            const mapOverpass = {
              title: `Map is \`${lastMessage}\``,
              description: `Click the link below to join the Pandemonium server\n\nConnect: steam://connect/208.167.251.244:27035\nPassword: **Pandemonium**\n\nCopy in console:\n**connect 208.167.251.244:27035;password Pandemonium**`,
              color: 7584788,
              thumbnail: {
                url: "https://i.imgur.com/ZhP3hKo.jpg",
              },
              timestamp: new Date(),
              footer: {
                text: "Please join the server in 5min",
                icon_url: "https://i.imgur.com/vHIoeL4.png",
              },
            };
            message.channel.send({ embed: mapOverpass });
          } else if (lastMessage.content === "Train") {
            const mapTrain = {
              title: `Map is \`${lastMessage}\``,
              description: `Click the link below to join the Pandemonium server\n\nConnect: steam://connect/208.167.251.244:27035\nPassword: **Pandemonium**\n\nCopy in console:\n**connect 208.167.251.244:27035;password Pandemonium**`,
              color: 7584788,
              thumbnail: {
                url: "https://i.imgur.com/PoYG4bk.jpg",
              },
              timestamp: new Date(),
              footer: {
                text: "Please join the server in 5min",
                icon_url: "https://i.imgur.com/vHIoeL4.png",
              },
            };
            message.channel.send({ embed: mapTrain });
          } else if (lastMessage.content === "Vertigo") {
            const mapVertigo = {
              title: `Map is \`${lastMessage}\``,
              description: `Click the link below to join the Pandemonium server\n\nConnect: steam://connect/208.167.251.244:27035\nPassword: **Pandemonium**\n\nCopy in console:\n**connect 208.167.251.244:27035;password Pandemonium**`,
              color: 7584788,
              thumbnail: {
                url: "https://i.imgur.com/pQrBzZk.jpg",
              },
              timestamp: new Date(),
              footer: {
                text: "Please join the server in 5min",
                icon_url: "https://i.imgur.com/vHIoeL4.png",
              },
            };
            message.channel.send({ embed: mapVertigo });
          }
        }
      })
      .catch(console.error);
  } //end of the ✅ reaction if statemtn
}); //end of the "messageReactionAdd" listner
