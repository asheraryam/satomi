const { Command } = require('sylphy');

class Poll extends Command {
    constructor(...args) {
        super(...args, {
            name: 'poll',
            group: 'moderation',
            cooldown: 2,
            options: { guildOnly: true, requirements: { permissions: { manageMessages: true }}},
            usage: [
                { name: 'phrase', displayName: 'phrase', type: 'string', optional: false, last: true }
            ]
        });
    }

    async handle ({ args, client, msg }, responder) {
        const phrase = args.phrase;

        msg.delete();
        await responder.send(' ', { embed: {
            color: client.hexColor,
            title: 'Poll Started! by - ' + msg.author.username + '#' + msg.author.discriminator,
            description: phrase,
            timestamp: new Date()
        }}).catch(this.logger.error);

        // msg.addReaction('checkmark:441453811324944385', client.user.id);
        // msg.addReaction('neutral:441452321894039562', client.user.id);
        // msg.addReaction('xmark:441452366143815690', client.user.id);
    }
}

module.exports = Poll;
