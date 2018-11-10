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
        } else if (member.id === client.id) {
            return responder.send(`${msg.author.mention}, fuck you`);
        }

        const reply = await responder.dialog([{
            prompt: '❗ Do you want to ban the user? Respond by \`yes\` or \`no\`',
            input: { name: 'response', type: 'string', choices: ['yes', 'no'] }
        }]);

        if (reply.response === 'yes') {
            try {
                const userDM = await client.getDMChannel(member.id);
                await userDM.createMessage({ embed: {
                    color: client.redColor,
                    title: `Banned from ${msg.channel.guild.name}`,
                    description: `Reason: ${reason}`,
                    timestamp: new Date()
                } });
                await msg.channel.guild.banMember(member.id, msgPurge, reason);
                return responder.send(' ', { embed: {
                    color: client.redColor,
                    title: 'Member Banned!',
                    thumbnail: {
                        url: member.avatarURL
                    },
                    fields: [{
                        name: 'User',
                        value: `${member.username}#${member.discriminator}` +
                        `\n(${member.id})`,
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
