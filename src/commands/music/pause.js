const { Command } = require('sylphy');

class Pause extends Command { 
    constructor(...args) {
        super(...args, {
            name: 'pause',
            group: 'music',
            cooldown: 0,
            options: { guildsOnly: true }
        })
    }

    handle ({ args, client, msg }, responder) {
        return
    }
}

module.exports = Pause;