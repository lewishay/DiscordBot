const commando = require("discord.js-commando");

class AttackCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "attack",
            group: "fight",
            memberName: "attack",
            description: "The mage attacks with his melee weapon"
        })
    }

    async run(message, args) {
        var attackValue = Math.floor(Math.random() * 100) + 1;
        message.reply("I attack for " + attackValue + " damage!");
    }
}

module.exports = AttackCommand;