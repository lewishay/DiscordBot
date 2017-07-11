const commando = require("discord.js-commando");
const pokemon = require("./pokemonScript");

class PokemonCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "pokemon",
            group: "projects",
            memberName: "pokemon",
            description: "A given type of pokemon attack is checked against one or two defensive types and the effectiveness" +  
                        " of the move is returned"
        })
    }

    async run(message, args) {
        if(args == "") {
            message.reply("You need an argument to use this command!");
        }
        else if(args.split(' ').length == 2) {
            message.reply("**```css\n" + pokemon.effectivenessCheck2(args.split(' ')[0], args.split(' ')[1]) + "\n```**");
        }
        else if(args.split(' ').length == 3) {
            message.reply("**```css\n" + pokemon.effectivenessCheck3(args.split(' ')[0], args.split(' ')[1], 
                args.split(' ')[2]) + "\n```**");
        }
        else {
            message.reply("The value given must be two or three pokemon types, each seperated by a space.")
        }
    }
}

module.exports = PokemonCommand;