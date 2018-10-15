const { Command } = require('sylphy');

class Ban extends Command {
    constructor(...args) {
        super(...args, {
            name: 'ban',
            group: 'moderation',
            cooldown: 2,
            options: { guildOnly: true, requirements: { permissions: { banMembers: true } } },
            usage: [
                { name: 'member', displayName: 'member', type: 'string', optional: false },
                { name: 'reason', displayName: 'reason', type: 'string', optional: true, last: true }
            ]
        });
    }

    handle ({ args, client, msg }, responder) {
        if (msg.mentions.length === 0) {
            return responder.send(`${msg.author.mention}, Please mention a user to ban~! :anger:`);
        }

        const member = msg.mentions[0];
        const reason = args.reason;

        client.banGuildMember(msg.guild.id, member, 7, reason).then(() => {
            return responder.send(' ', { embed: {
                color: client.redColor,
                title: 'Member Banned!',
                thumbnail: {
                    url: member.avatarURL
                },
                fields: [{
                    name: 'User',
                    value: `${member.username}#${member.discriminator}`,
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
            } }).catch(this.logger.error);
        }).catch(this.logger.error);
    }
}

module.exports = Ban;
