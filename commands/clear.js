const Discord = require("discord.js");
const config = require("../config.json");
let prefix = config.prefix;

module.exports.run = async (client, message, args) => {
    client.on("message", (message) => {

        if (!message.content.startsWith(prefix) || message.author.bot) return;
      
        const args = message.content
          .toLowerCase()
          .slice(prefix.length)
          .trim()
          .split(/\s+/);
        const [command, input] = args;
      
        if (command === "clear" || command === "c") {
          if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send("You don't have the permissions!");
          }
      
          if (isNaN(input)) {
            return message.channel
              .send("Enter the amount messages that you would like to delete")
              .then((sent) => {
                setTimeout(() => {
                  sent.delete();
                }, 2500);
              });
          }
      
          if (Number(input) < 0) {
            return message.channel.send("Enter a positive number").then((sent) => {
              setTimeout(() => {
                sent.delete();
              }, 2500);
            });
          }
      
          // add an extra to delete the current message too
          const amount = Number(input) > 100 ? 101 : Number(input) + 1;
      
          message.channel.bulkDelete(amount, true).then((_message) => {
            message.channel
              // do you want to include the current message here?
              // if not it should be ${_message.size - 1}
              .send(`BOT deleted \`${_message.size}\` messages :broom:`)
              .then((sent) => {
                setTimeout(() => {
                  sent.delete();
                }, 2500);
              });
          });
        }
      });
}

module.exports.help = {
  name:"clear",
  name:"c"
}