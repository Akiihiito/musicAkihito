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
    
    if (message.content === prefix + "invite"){
        var embed = newDiscord.RichEmbed()
        .setTitle("Discord Akihito")
        .setDescription("Voici le lien du discord")
        .addFiel(".help","Page d'aide", true)
        .addFiel("Embed01","Embed 01 ! Pour avoir des informations ou une aide [Discord Akihito](https://discord.gg/VxCb2pm)", true)
        .setColor("0xFF0000")
        .setFooter("Bievenue à vous ! ")
        message.channel.sendEmbed(embed);
    }
});
