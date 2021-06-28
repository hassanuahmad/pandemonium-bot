module.exports = {
	name: 'clear',
	description: 'Command that clears messeges from the server',
	async execute(message, args) {
        if (!args[0]) return message.channel.send("Please enter the amount of messages that you want to clear!");
        if (isNaN(args[0])) return message.channel.send("Please enter a real number!");
        if (args[0] > 100) return message.channel.send("You can't delete more than 100 messeges!");
        if (args[0] < 1) return message.channel.send("You must clear atleast 1 message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        });
        message.channel.send("Deleted " + args[0]  + " messages 🧹");
    },
};