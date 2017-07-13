const commando = require("discord.js-commando");
const weather = require("./weatherRequest");

class WeatherCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "weather",
            group: "weather",
            memberName: "weather",
            description: "The current weather forecast is returned for a city in the UK." + 
                        "(Supported cities: manchester, london, newcastle, cardiff, glasgow)"
        })
    }

    async run(message, args) {
        if(args == "") {
            message.reply("You need to provide an argument to use this command!");
        }
        else if(args == "manchester" || args == "london" || args == "newcastle" || args == "cardiff" || args == "glasgow") {
            weather.getWeather(args,(obj)=>message.reply("**```css\n" + obj.x + "\n" + obj.y + "\n" + obj.z + "\n```**"));
        }
        else {
            message.reply("Sorry, but weather data for that city is not available.");
        }   
    }
}

module.exports = WeatherCommand;