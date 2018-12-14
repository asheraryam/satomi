const { Command } = require('sylphy');

class Purge extends Command {
    constructor (...args) {
        super (...args, {
            name: 'purge',
            group: 'moderation',
            aliases: ['clear', 'delete'],
            cooldown: 2,
            options: { guildOnly: true, requirements: { permissions: { manageMessages: true } } },
            usage: [
                { name: 'limit', displayName: 'limit', type: 'int', min: 1, max: 51 }
            ]
        });
    }

    handle ({ args, client, msg }, responder) {
        const limit = args.limit + 1;

        if (limit > 51) {
            return responder.send(' ', { embed: {
                color: client.redColor,
                description: ':x: Message count too high! Max is 50'
            } });
        }

        client.purgeChannel(msg.channel.id, limit).catch((error) => {
            responder.send(' ', { embed: {
                color: client.redColor,
                description: `There was an error trying to purge: ${error}`
            } });
        });

    }
}

module.exports = Purge;
