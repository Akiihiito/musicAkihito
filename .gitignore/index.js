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
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }

    if (message.content === "Bienvenue"){
        message.reply("Je te souhaite la bienvenue ");
        console.log("Commande Salut effectué");
    }
});
