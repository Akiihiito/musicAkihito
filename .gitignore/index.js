const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connectedç");
});

bot.login("NDk0ODMzNzU2MzMxNTczMjQ4.Do5mlg.GPJBcRzqkUc7SvMXQl857B_Gv_w");

bot.on('message', message=> {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n *help \n *fabriquant");
    

    if (message.content === prefix + "fabriquant"){
        message.reply("_Ce bot a été crée par Akihito_");
        console.log("Commande fabriquant éfféctué");
    }
});
