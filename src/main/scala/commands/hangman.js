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
        if(args == "new") {
            message.reply("**```css\n" + hangman.newGame() + "\n```**");
        }
        else if(args.length !== 1) {
            message.reply("Invalid input! Please enter 'new' to start a new game or a single letter to continue a current game.");
        }
        else {
            message.reply("**```css\n" + hangman.makeMove(args) + "\n```**");
        }
    }
}

module.exports = HangmanCommand;