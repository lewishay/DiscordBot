const commando = require("discord.js-commando");

class ItemCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "item",
            group: "fight",
            memberName: "item",
            description: "The mage uses an item"
        })
    }

    async run(message, args) {
        var itemList = ["Potion", "Ether", "Megalixir"];
        var item = itemList[Math.floor(Math.random() * 3)];
        message.reply("I use " + item + "!");
    }
}

module.exports = ItemCommand;