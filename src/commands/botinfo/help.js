const { Command } = require('sylphy')

class Help extends Command {
    constructor (...args) {
        super (...args, {
            name: 'help',
            group: 'botinfo',
            cooldown: 5,
            options: {guildsOnly: true}
        })
    }

    handle ({ args, client, msg}, responder) {
        return responder.send(`${msg.author.mention}`, {embed: {
            title: 'Satomi, Help!',
            description: 'hopefully this command solves your question(s), every minute, the status changes ~',
            color: 0x66dac3,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            fields: [{
                name: 'Source Code',
                value: 'https://github.com/stellarsdev/satomi'
            },
            {
                name: 'Trello Board',
                value: 'https://trello.com/b/TRspnxiz/satomi'
            },
            {
                name: 'Commands',
                value: '`s.commands`: will return with all commands available'
            },
            {
                name: 'Wheres Ban/Kick?',
                value: 'I think I just want this to be a fun bot, but i will probably add so in the future'
            },
            {
                name: 'No NSFW Commands?',
                value: 'I dont think Ill be adding these types of commands to Satomi, but... there are plenty' + 
                '\nof bots to also add to your server that have this (BoobtBot, LewdBot, etc.)'
            }],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: client.user.username + ' | created by stellarsdev @github'
            }
        }})
        .catch(this.logger.error)
    }
}

module.exports = Help
