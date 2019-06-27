    // On charge la librairie discord
const Discord = require('discord.js')
    // On instancie notre bot
const bot = new Discord.Client()
const Google = require('./commands/google')


        // ready fonction quand le bot se lance 
    bot.on('ready', function (){
        // permet de regler l'avatar du bot
        // bot.user.setAvatar('./helloKitty.jpg').catch(console.error)

        // .then(() => console.log('avatar charger avec succes'))


        //Je dis qu'il est en train de jouer à '' et je catch en cas d'erreur
    bot.user.setActivity('HelloKitty Online').catch(console.error)


})

    // GuildMemberAdd quand un membre rejoint le serveur
bot.on('guildMemberAdd', function (member) {

        member.createDM().then(function (channel) {
       return channel.send('welcome to the club' + member.displayName)
    }).catch(console.error)
    // Quand l'utilisateur arrive sur le seveur lui envoi un petit message
})

   

    //on va creer une fonction message ou le bot repondra automatiqument
bot.on('message', function (message) {

if (Google.match(message)) {
  
  Google.parse(message)


}

        //si on fait !ping le bot repondra pong
if (message.content === '!ping'){
        //Il repond en Nomant l'utilisateur qui dit !ping
  //  message.reply('pong')
        // il repond Sans nommer l'utilisateur
    message.channel.send('pong')
}

})
    // Key pour recuperer le bot discord
bot.login('*******key*************')