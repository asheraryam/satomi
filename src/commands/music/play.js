const { Command } = require('sylphy');

class Play extends Command { 
    constructor(...args) {
        super(...args, {
            name: 'play',
            group: 'music',
            cooldown: 0,
            options: { guildsOnly: true },
            usage: [
                { name: 'number', displayName: 'number', type: 'int', optional: false, last: true }
            ]
        })
    }

    handle ({ args, client, msg }, responder) {
        return;
    }
}

module.exports = Play;