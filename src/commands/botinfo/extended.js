const { Command } = require('sylphy');

class Extended extends Command {
    constructor(...args) {
        super(...args, {
            name: 'extended',
            group: 'botinfo',
            cooldown: 0,
            options: { guildsOnly: true },
            usage: [
                { name: 'command', displayName: 'command', type: 'string', optional: false, last: true }
            ]
        })
    }

    handle ({ args, client, msg }, responder) {
        return
    }
}

module.exports = Extended;