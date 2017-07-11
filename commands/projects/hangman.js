const commando = require("discord.js-commando");
const hangman = require("./hangmanScript");

class HangmanCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "hangman",
            group: "projects",
            memberName: "hangman",
            description: "Play a game of hangman"
        })
    }

    async run(message, args) {
        if(args.length !== 1) {
            message.reply("Invalid guess! Please provide a single character.");
        }
        else {
            message.reply("**```css\n" + hangman.makeMove(args) + "\n```**");
        }
    }
}

module.exports = HangmanCommand;