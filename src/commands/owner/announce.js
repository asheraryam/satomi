const { Command } = require('sylphy')
const masterkeys = require('../../../masterkeys.json')

class Announce extends Command {
    constructor (...args) {
        super(...args, {
            name: 'announce',
            group: 'owner',
            cooldown: 5,
            options: {guildsOnly: true},
            usage: [
                { name: 'announcement', displayName: 'announcement', type: 'string', optional: 'false', last: true }
            ]
        })
    }

    handle ({ args, client, msg }, responder) {
        const announcement = args.announcement

        if (msg.author.id === masterkeys.ownerID) {
            msg.delete()
            return responder.send('@everyone', {embed:{
                color: 0x66dac3,
                title: ':postal_horn: Announcement!',
                description: `${announcement}`,
                timestamp: new Date()
            }})
            .catch(this.logger.error)
        }
    }
}

module.exports = Announce
