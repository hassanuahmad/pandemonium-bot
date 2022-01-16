module.exports = {
    name: "clear",
    async execute(message, args) {
        if (message.member.roles.cache.has("845758498863316993")) {
            if (!args[0])
                return message.channel.send(
                    "Please enter the amount of messages that you want to clear!"
                );
            if (isNaN(args[0]))
                return message.channel.send("Please enter a real number!");
            if (args[0] > 100)
                return message.channel.send(
                    "You can't delete more than 100 messeges!"
                );
            if (args[0] < 1)
                return message.channel.send(
                    "You must clear atleast 1 message!"
                );

            await message.channel.messages
                .fetch({ limit: args[0] })
                .then((messages) => {
                    message.channel.bulkDelete(messages);
                });
        } else {
            message.channel.send(
                `You **DON'T** have permissions to use this command!`
            );
        }
    },
};
