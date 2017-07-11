const commando = require("discord.js-commando");
const rpsls = require("./rockPapSciLizSpoScript");

class RockPapSciLizSpoCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "rpsls",
            group: "projects",
            memberName: "rpsls",
            description: "Play a game of Rock Paper Scissors Lizard Spock"
        })
    }

    async run(message, args) {
        if(args == "") {
            message.reply("You need an argument to use this command!");
        }
        else {
            message.reply("**```css\n" + rpsls.makeMove(args) + "\n```**");
        }
    }
}

module.exports = RockPapSciLizSpoCommand;