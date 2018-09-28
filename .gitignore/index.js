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
        message.channel.sendMessage("Liste des commandes: \n *help \n *fabriquant \n *invite");
    }

    if (message.content === prefix + "fabriquant"){
        message.reply("_Ce bot a été crée par Akihito_");
        console.log("Commande fabriquant éfféctué");
    }
    if (message.content === prefix + "invite"){
        var embed = new Discord.RichEmbed()
            .setTitle("Discord Akihito")
            .setDescription("Vous voulez inviter le bot ?")
            .addField("Lien","Voici le lien d'invitation [ICI](https://discordapp.com/oauth2/authorize?client_id=494833756331573248&scope=bot&permissions=8)", true)
            .setColor("0xFF0000")
            .setFooter("Merci de votre confiance ! :) ")
        message.channel.sendEmbed(embed);
    }
});
