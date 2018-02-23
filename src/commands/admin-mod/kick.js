const { Command } = require('sylphy');

class Kick extends Command {
    constructor(...args) {
        super(...args, {
            name: 'kick',
            group: 'admin-mod',
            cooldown: 2,
            options: { guildOnly: true, requirements: { permissions: { manageMessages: true }}},
            usage: [
                { name: 'member', displayName: 'member', type: 'string', optional: false },
                { name: 'reason', displayName: 'reason', type: 'string', optional: true, last: true }
            ]
        });
    }

    handle ({ args, client, msg }, responder) {
        if (msg.mentions.length === 0) {
            return responder.send(msg.author.mention + ', Please mention a user to kick~! :anger:');
        }

        const member = msg.mentions[0];
        const reason = args.reason;

        client.kickGuildMember(msg.guild.id, member, reason).then(() => {
            return responder.send(' ', { embed: {
                color: 0xffd7ee,
                title: 'Member Kicked!',
                thumbnail: {
                    url: member.avatarURL
                },
                fields: [{
                    name: 'User',
                    value: member.username + '#' + member.discriminator,
                    inline: true
                },
                {
                    name: 'Reason',
                    value: reason === '' ? 'reason not specified' : reason
                },
                {
                    name: 'Responsible Admin',
                    value: msg.author.mention
                }],
                timestamp: new Date()
            }}).catch(this.logger.error);
        }).catch(this.logger.error);
    }
}

module.exports = Kick;
