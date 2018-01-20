const { Command } = require('sylphy');

class Purge extends Command {
    constructor (...args) {
        super (...args, {
            name: 'purge',
            group: 'admin-mod',
            aliases: ['clear', 'delete'],
            cooldown: 0,
            options: { guildsOnly: true, requirements: { permissions: { manageMessages: true }}},
            usage: [
                { name: 'limit', displayName: 'limit', type: 'int', min: 1, max: 50 }
            ]
        })
    }

    handle ({ args, client, msg }, responder) {
        const limit = args.limit + 1

        if (limit > 50) return responder.send(' ', {embed:{
            color: 0xff4b4b,
            description: ':x: Message count too high! Max is 50'
        }});

        client.purgeChannel(msg.channel.id, limit)
        .catch(err => responder.send(' ', {embed: {
            description: `There was an error trying to purge: ${error}`}}));

    }
}

module.exports = Purge;