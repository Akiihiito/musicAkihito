const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ histoires: [], xp: []}).write()

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);

bot.on('message', message=> {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n *help \n *fabriquant \n *invite \n *xp ");
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


    var msgauthor = message.author.id;

    if(message.author.bot)return;

    if(!db.get("xp").find({user: msgauthor}).value()){
        db.get("xp").push({user: msgauthor, xp: 1}).write();
    }else{
        var userxpdb = db.get ("xp").filter({user: msgauthor}).find('xp').value();
        console.log(userxpdb);
        var userxp = Object.values(userxpdb)
        console.log(userxp)
        console.log('Nombre d`xp : ${userxp[1]}')

        db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 1}).write();

    if (message.content === prefix + "xp"){
        var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
        var xpfinal = Object.values(xp);
        var xp_embed = new Discord.RichEmbed()
            .setTitle(`Stat des xp de ${message.author.username}`)
            .setColor('#F4D03F')
            .setDescription("Affichage des XP")
            .addField("XP:", `${xpfinal[1]} xp`)
            .setFooter("Enjoy :p")
        message.channel.send({embed: xp_embed});

    }}})
