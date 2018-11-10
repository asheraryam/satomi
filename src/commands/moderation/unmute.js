const { Command } = require('sylphy');

class Unmute extends Command {
    constructor (...args) {
        super (...args, {
            name: 'unmute',
            group: 'moderation',
            aliases: ['ungag'],
            cooldown: 2,
            options: { guildOnly: true, requirements: { permissions: { voiceMuteMembers: true } } },
            usage: [
                { name: 'member', displayName: 'member', type: 'string', optional: true, last: false },
                { name: 'options', displayName: 'options', type: 'string', optional: true, last: true }
            ]
        });
    }

    handle ({ args, client, msg }, responder) {
        if (!msg.mentions) {
            return responder.send(`${msg.author.mention}, Please mention a user to unmute~! :anger:`);
        }

        const member = msg.mentions[0];
        const options = args.options;

        // Nothing to see here :^)
    }
}

module.exports = Unmute;
