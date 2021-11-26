const memberCounter = require("./member-counter");

module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log(`${client.user.tag} has logged in.`);
        client.user.setActivity("Serving Pandemonium");
        memberCounter(client);
    },
};
