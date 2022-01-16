const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("clear")
        .setDescription("Clears X amount of messages")
        .addIntegerOption((option) =>
            option
                .setName("amount")
                .setDescription("Enter amount of messages to delete")
                .setRequired(true)
        )
        .addUserOption((option) =>
            option
                .setName("target")
                .setDescription("Enter user to delete messages of")
        ),
    async execute(interaction) {
        const { channel, options } = interaction;
        const Amount = options.getInteger("amount");
        const Target = options.getUser("target");

        const Messages = await channel.messages.fetch();
        const Response = new MessageEmbed().setColor("#607D8B");

        if (Amount > 100 || Amount <= 0) {
            Response.setDescription(
                `Amount cannot exceed 100, and cannot be under 1.`
            );
            return interaction.reply({ embeds: [Response] });
        }

        if (Target) {
            let counter = 0;
            const filteredMsgs = [];
            (await Messages).filter((msg) => {
                if (msg.author.id === Target.id && Amount > counter) {
                    filteredMsgs.push(msg);
                    counter++;
                }
            });

            await channel.bulkDelete(filteredMsgs, true).then((messages) => {
                Response.setDescription(
                    `Cleared **${messages.size}** messages from ${Target}`
                );
                interaction.reply({ embeds: [Response] });
            });
        } else {
            await channel.bulkDelete(Amount, true).then((messages) => {
                Response.setDescription(
                    `Cleared **${messages.size}** messages`
                );
                interaction.reply({ embeds: [Response] });
            });
        }
    },
};
