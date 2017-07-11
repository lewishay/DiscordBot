const commando = require("discord.js-commando");
const numberReducer = require("./numberReducerScript");

class NumberReducerCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "numreduce",
            group: "projects",
            memberName: "numreduce",
            description: "A given number is reduced down to 1"
        })
    }

    async run(message, args) {
        if(isNaN(args)) {
            message.reply("You need to provide a number to use this command!");
        }
        else {
            if(args > 9999999999) {
                message.reply("This number is too high for me to work with! Please use a number with fewer than 11 digits.");
            }
            else {
                message.reply("**```css\n" + numberReducer.reduce(args) + "\n```**");
            }      
        }
    }
} 

module.exports = NumberReducerCommand;