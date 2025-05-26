const commando = require("discord.js-commando");
const wordSquare = require("./wordSquareScript");

class WordSqCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "wordsquare",
            group: "projects",
            memberName: "wordsquare",
            description: "A square is returned containing the given word as the border"
        })
    }

    async run(message, args) {
        if(args == "") {
            message.reply("You need an argument to use this command!");
        }
        else {
            if(args.length > 31) {
                message.reply("This word is too big! Please use a word with fewer than 32 characters.");
            }
            else {
                message.reply("**```css\n" + wordSquare.makeSquare(args) + "\n```**");
            }  
        }
    }
}

module.exports = WordSqCommand;