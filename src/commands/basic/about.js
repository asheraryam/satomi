const { Command } = require('sylphy');

class About extends Command {
    constructor (...args) {
        super (...args, {
            name: 'about',
            group: 'basic',
            cooldown: 2,
            options: { guildOnly: true }
        });
    }

    handle ({ client }, responder) {
        return responder.send(' ', { embed: {
            title: 'Satomi, About~',
            description: 'some more info about satomi can be found here ~',
            color: client.satomiColor,
            author: {
                name: 'Satomi',
                icon_url: client.user.avatarURL
            },
            fields: [{
                name: 'Mini Q & A',
                value: 'Whats Satomi\'s color? #98ffa6'
            },
            {
                name: 'Source Code',
                value: 'https://github.com/kyostra/satomi'
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
                text: 'Satomi | created by kyostra @github/twitter'
            } }
        }).catch(this.logger.error);
    }
}

module.exports = About;
