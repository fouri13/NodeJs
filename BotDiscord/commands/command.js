
// je crée un module exportable 
module.exports = class command {
    static parse (message) {
        // je verifie si le message match avec une command
        if (this.match(message)) {
            this.action(message)
            return true
        } else {
            return false
        }

    }

    static match (message) {
        return false
    }

   static action (message) {
    }


}