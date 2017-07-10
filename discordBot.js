const Discord = require("discord.js");
const privateStuff = require("./token");
const client = new Discord.Client();
var token = privateStuff.key

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === "!attack") {
    var attackValue = Math.floor(Math.random() * 100) + 1;
    msg.reply("I attack for " + attackValue + " damage!");
  }
});

client.on('message', msg => {
  if (msg.content === "!magic") {
    var spellList = ["Fire", "Thunder", "Blizzard", "Haste", "Quake"]
    var spell = spellList[Math.floor(Math.random() * 5)];
    msg.reply("I cast " + spell + "!");
  }
});

client.on('message', msg => {
  if (msg.content === "!item") {
    var itemList = ["Potion", "Ether", "Megalixir"]
    var item = itemList[Math.floor(Math.random() * 3)];
    msg.reply("I use " + item + "!");
  }
});

client.login(token)