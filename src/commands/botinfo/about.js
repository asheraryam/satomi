const { Command } = require('sylphy');

class About extends Command {
    constructor (...args) {
        super (...args, {
            name: 'about',
            group: 'botinfo',
            cooldown: 2,
            options: { guildOnly: true }
        });
    }

    handle ({ client, msg }, responder) {
        return responder.send(msg.author.mention, { embed: {
            title: 'Satomi, About~',
            description: 'some more info about satomi can be found here ~',
            color: 0x98ffa6,
            author: {
                name: 'Satomi',
                icon_url: client.user.avatarURL
            },
            fields: [{
                name: 'Source Code',
                value: 'https://github.com/envyist/satomi'
            },
            {
                name: 'Trello Board',
                value: 'https://trello.com/b/TRspnxiz/satomi'
            },
            {
                name: 'Support Server',
                value: 'not setup yet :('
            }],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: 'Satomi | created by envyist @github/twitter'
            } }
        }).catch(this.logger.error);
    }
}

module.exports = About;
