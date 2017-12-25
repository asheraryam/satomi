const { Command } = require('sylphy');

class Commands extends Command {
    constructor (...args) {
        super (...args, {
            name: 'commands',
            group: 'botinfo',
            cooldown: 0,
            options: {guildsOnly: true}
        })
    }

    handle ({ args, client, msg}, responder) {
        return responder.send(`${msg.author.mention}`, {embed: {
            title: 'Satomi Commands!',
            description: 'Prefix: s. | type s.help for more help',
            color: 0x66dac3,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            fields: [{
                name: 'Bot Info',
                value: 'owo'
            }],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: client.user.username + ' | created by stellarsdev @github'
            }
        }}).catch(this.logger.error);
    }
}

module.exports = Commands;
