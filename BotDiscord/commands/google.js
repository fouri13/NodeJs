// je recupere commands.js
const Command = require('./command')

// Je crée un class google qui extends de comand
module.exports = class Google extends Command {

    static match (message) {
        // si je commence par !google je recupere la chaine de caractere
        return message.content.startsWith('!google')

    }

   static action (message) {
    // je split dans le message et recupere apres l'espace 
    let args = message.content.split(' ')
    
    args.shift()
        // je lui demande d'afficher ma recherche google
        message.reply('https://www.google.fr/#q=' + args.join('%20'))
    }


}