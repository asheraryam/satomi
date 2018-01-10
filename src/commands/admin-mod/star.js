const { Command } = require('sylphy');

class Star extends Command {
    constructor(...args) {
        super(...args, {
            name: 'star',
            group: 'admin-mod',
            cooldown: 2,
            options: { guildsOnly: true, requirements: { permissions: { manageMessages: true }}},
            usage: [
                { name: 'messageID', displayName: 'messageID', type: 'string', optional: true, last: true }
            ]
        })
    }

    async handle ({ args, client, msg }, responder) {
        const messageID = args.messageID;
        const starboard = await msg.channel.guild.channels.get('starboard');
        const message = await msg.channel.messages.find(messageID);

        return client.createMessage(starboard, {embed: {
            color: 0xea9a94,
            title: 'Message Starred!',
            fields: [{
                name: 'Author',
                value: `${message.author.username}` + `${message.author.discriminator}`,
                inline: true
            },
            {
                name: 'Channel',
                value: `${message.channel}`,
                inline: true
            },
            {
                name: 'MessageID',
                value: `${message.id}`,
                inline: true
            },
            {
                name: 'Message',
                value: `${message.content}`,
                inline: true
            }],
            timestamp: new Date(),
            footer: {
                icon_url: '',
                text: ':star:'
            }
        }}).catch(this.logger.erorr);
    }
}

module.exports = Star;