const commando = require("discord.js-commando");

class MagicCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "magic",
            group: "fight",
            memberName: "magic",
            description: "The mage casts a spell"
        })
    }

    async run(message, args) {
        var spellList = ["Fire", "Thunder", "Blizzard", "Haste", "Quake"];
        var spell = spellList[Math.floor(Math.random() * 5)];
        message.reply("I cast " + spell + "!");
    }
}

module.exports = MagicCommand;