const { Command } = require('sylphy');

class Announce extends Command {
    constructor (...args) {
        super(...args, {
            name: 'announce',
            group: 'admin-mod',
            cooldown: 5,
            options: { guildOnly: true, requirements: { permissions: { administrator: true }}},
            usage: [
                { name: 'announcement', displayName: 'announcement', type: 'string', optional: 'false', last: true }
            ]
        });
    }

    handle ({ args, msg }, responder) {
        const announcement = args.announcement;

        msg.delete();
        return responder.send('@everyone', { embed: {
            color: 0xffd7ee,
            title: ':postal_horn: Announcement!',
            description: `${announcement}`,
            timestamp: new Date()
        }}).catch(this.logger.error);
    }
}

module.exports = Announce;
