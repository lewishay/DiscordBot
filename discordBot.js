const Discord = require("discord.js");
const commando = require("discord.js-commando");
const bot = new commando.Client();
const privateStuff = require("./token");
var token = privateStuff.key

bot.registry.registerGroup("fight");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.login(token)