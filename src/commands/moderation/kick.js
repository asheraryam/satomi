const { Command } = require('sylphy');

class Kick extends Command {
    constructor(...args) {
        super(...args, {
            name: 'kick',
            group: 'moderation',
            cooldown: 2,
            options: { guildOnly: true, requirements: { permissions: { kickMembers: true } } },
            usage: [
                { name: 'member', displayName: 'member', type: 'member', optional: true },
                { name: 'reason', displayName: 'reason', type: 'string', optional: true, last: true }
            ]
        });
    }

    async handle ({ args, client, msg }, responder) {
        const member = msg.mentions[0];
        const reason = args.reason;

        if (!msg.mentions) {
            return responder.send(`${msg.author.mention}, Please mention a user to kick~! :anger:`);
        } else if (!member) {
            return;
        }

        if (member.id === msg.author.id) {
            return responder.send(`${msg.author.mention}, You cant kick yourself :anger:`);
        } else if (member.id === client.user.id) {
            return responder.send(`${msg.author.mention}, nice try <a:gachiBASS:421166944998129695> <a:HYPERCLAP:477515918813954048>`);
        }

        const reply = await responder.dialog([{
            prompt: '❗ Do you want to kick the user? Respond by `yes` or `no`',
            input: { name: 'response', type: 'string', choices: ['yes', 'no'] }
        }]);

        if (reply.response === 'yes') {
            try {
                const userDM = await client.getDMChannel(member.id);
                await this.send(userDM, '', { embed: {
                    color: client.redColor,
                    title: `Kicked from ${msg.channel.guild.name}`,
                    description: `Reason: ${reason === null ? 'reason not specified' : reason}`,
                    timestamp: new Date()
                } });
                await msg.channel.guild.kickMember(member.id, reason);
                client.emit('satomiMemberKick', msg.channel.guild, member.user, reason);
                return responder.send(' ', { embed: {
                    color: client.redColor,
                    title: 'Member Kicked!',
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
                    title: 'Kick Error',
                    description: `${error}`,
                    timestamp: new Date()
                } });
            }
        } else {
            return responder.send(`Ok, **${member.username}#${member.discriminator}** will not be kicked`);
        }
    }
}

module.exports = Kick;
