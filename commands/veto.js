// const Discord = require("discord.js");
// const config = require("../config.json");
// let password = config.server_password;

// module.exports.run = async (client, message, args) => {
//     const maps = [
//     "Mirage",
//     "Dust 2",
//     "Inferno",
//     "Nuke",
//     "Train",
//     "Overpass",
//     "Vertigo",
//     ];

//     //random head and tails
//     function doRandHT() {
//         var rand = ["**```HEADS```**", "**```TAILS```**"];
//         return rand[Math.floor(Math.random() * rand.length)];
//     }

//     //printing the HT winner show the welcome line
//     const embed = {
//         title: `Welcome to Pandemonium GAYMENS!\n\nKnife Round Winner: ` + doRandHT(),
//         description: `**VETO** Winner vetos first map\nReact with ✅ on the last map`,
//         color: 7584788,
//         timestamp: new Date(),
//         thumbnail: {
//             url: "https://i.imgur.com/vHIoeL4.png",
//         },
//     };
//     message.channel.send({ embed });

//     //putting the maps in different lines and giving them the -1 reaction and then deleting it
//     for (let i = 0; i < maps.length; i++) {
//         const mapLines = await message.channel.send(maps[i]);
//         mapLines.react("✅");
//         mapLines.react("❌");
//     }

//     client.on("messageReactionAdd", async (reaction, user) => {
//         const message = reaction.message;
//         if (message.author.id == user.id) return;
//         if (reaction.emoji.name == "❌") reaction.message.delete();
//         if (reaction.emoji.name == "✅") {
//           setTimeout(() => message.delete(), 2000);
//           await client.channels.fetch("830954302658445362");
//           let channel = client.channels.cache.get("830954302658445362");
//           channel.messages
//             .fetch({ limit: 1 })
//             .then((messages) => {
//               let lastMessage = messages.first();
      
//               if (lastMessage.author.client) {
//                 const embed = {
//                   title: `Map is \`${lastMessage}\``,
//                   description: `Click the link below to join the Pandemonium server\n\nConnect: steam://connect/208.167.251.244:27035\nPassword: **${password}**\n\nCopy in console:\n**connect 208.167.251.244:27035;password ${password}**`,
//                   color: 7584788,
//                   thumbnail: {
//                     url: "https://i.imgur.com/BFtfLbo.jpg[/img]",
//                   },
//                   timestamp: new Date(),
//                   footer: {
//                     text: "Please join the server in 5min",
//                     icon_url: "https://i.imgur.com/vHIoeL4.png",
//                   },
//                 };
//                 message.channel.send({ embed });
//               }
//             })
//             .catch(console.error);
//         } //end of the ✅ reaction if statemtn
//       }); //end of the "messageReactionAdd" listner
// }

// module.exports.help = {
//   name:"veto"
// }