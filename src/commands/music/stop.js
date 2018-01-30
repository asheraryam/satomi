const { Command } = require('sylphy');

class Stop extends Command { 
    constructor(...args) {
        super(...args, {
            name: 'stop',
            group: 'music',
            cooldown: 0,
            options: { guildsOnly: true }
        })
    }

    handle ({ args, client, msg }, responder) {
        return;
    }
}

module.exports = Stop;