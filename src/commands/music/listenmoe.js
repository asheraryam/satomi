const { Command } = require('sylphy');

class Listenmoe extends Command { 
    constructor(...args) {
        super(...args, {
            name: 'listenmoe',
            group: 'music',
            aliases: ['lm'],
            cooldown: 0,
            options: { guildsOnly: true }
        })
    }

    handle ({ args, client, msg }, responder) {
        return
    }
}

module.exports = Listenmoe;