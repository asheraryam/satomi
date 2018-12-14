const { Command } = require('sylphy');

class Ban extends Command {
    constructor(...args) {
        super(...args, {
            name: 'ban',
            group: 'moderation',
            cooldown: 2,
            options: { guildOnly: true, requirements: { permissions: { banMembers: true } } },
            usage: [
                { name: 'member', displayName: 'member', type: 'member', optional: true },
                { name: 'msgPurge', displayName: 'msgPurge', type: 'int', min: 0, max: 7, optional: true },
                { name: 'reason', displayName: 'reason', type: 'string', optional: true, last: true }
            ]
        });
    }

    async handle ({ args, client, msg }, responder) {
        const member = msg.mentions[0];
        const msgPurge = args.msgPurge;
        const reason = args.reason;

        if (!msg.mentions) {
            return responder.send(`${msg.author.mention}, Please mention a user to ban~! :anger:`);
        } else if (!member) {
            return;
        }

        if (member.id === msg.author.id) {
            return responder.send(`${msg.author.mention}, You cant ban yourself :anger:`);
        } else if (member.id === client.user.id) {
            return responder.send(`${msg.author.mention}, nice try <a:gachiBASS:421166944998129695> <a:HYPERCLAP:477515918813954048>`);
        }

        const reply = await responder.dialog([{
            prompt: '❗ Do you want to ban the user? Respond by `yes` or `no`',
            input: { name: 'response', type: 'string', choices: ['yes', 'no'] }
        }]);

        if (reply.response === 'yes') {
            try {
                const userDM = await client.getDMChannel(member.id);
                await this.send(userDM, '', { embed: {
                    color: client.redColor,
                    title: `Banned from ${msg.channel.guild.name}`,
                    description: `Reason: ${reason === null ? 'reason not specified' : reason}`,
                    timestamp: new Date()
                } });
                await msg.channel.guild.banMember(member.id, msgPurge, reason);
                client.emit('satomiMemberBan', msg.channel.guild, member.user, reason);
                return responder.send(' ', { embed: {
                    color: client.redColor,
                    title: 'Member Banned!',
                    thumbnail: {
                        url: member.user.avatarURL
                    },
                    fields: [{
                        name: 'User',
                        value: `${member.user.username}#${member.user.discriminator}` +
                        `\n(${member.user.id})`,
                        inline: true
                    },
                    {
                        name: 'Reason',
                        value: `${reason === null ? 'reason not specified' : reason}`
                    },
                    {
                        name: 'Responsible Admin/Mod',
                        value: msg.author.mention
                    }],
                    timestamp: new Date()
                } });
            } catch (error) {
                this.logger.error;
                return responder.send(' ', { embed: {
                    color: client.redColor,
                    title: 'Ban Error',
                    description: `${error}`,
                    timestamp: new Date()
                } });
            }
        } else {
            return responder.send(`Ok, **${member.username}#${member.discriminator}** will not be banned`);
        }
    }
}

module.exports = Ban;
