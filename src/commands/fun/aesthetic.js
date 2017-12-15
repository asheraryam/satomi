const { Command } = require('sylphy')
const aesth = require('aesthetics')

class Aesthetic extends Command {
    constructor (...args) {
        super(...args, {
            name: 'aesthetic',
            group: 'fun',
            aliases: ['aesth'],
            cooldown: 1,
            options: {guildsOnly: true},
            usage: [
                { name: 'phrase', displayName: 'phrase', type: 'string', optional: false, last: true }
            ]
        })
    }

    handle ({ args, client, msg }, responder) {
        return responder.send(`${msg.author.mention} ` + aesth(args.phrase))
        .catch(this.logger.error)
    }
}

module.exports = Aesthetic
