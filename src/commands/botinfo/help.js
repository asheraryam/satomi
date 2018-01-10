const { Command } = require('sylphy');

class Help extends Command {
    constructor (...args) {
        super (...args, {
            name: 'help',
            group: 'botinfo',
            cooldown: 0,
            options: { guildsOnly: true },
            usage: [
                { name: 'commands', displayName: 'commands', type: 'string', optional: true, last: true }
            ]
        })
    }

    handle ({ args, client, msg }, responder) {
        if (args.commands !== 'commands') {
            return responder.send(`${msg.author.mention}`, {embed: {
                title: 'Satomi, Help!',
                description: 'hopefully this command solves your question(s), every minute, the status changes ~',
                color: 0xea9a94,
                author: {
                    name: 'Satomi',
                    icon_url: `${client.user.avatarURL}`
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
                    value: '`s.help commands:` will return with all commands available' +
                    '\n`s.extended insert_command_here:` shows extended info about a command (WIP)'
                },
                {
                    name: 'No NSFW Commands?',
                    value: 'I dont think Ill be adding these types of commands to Satomi'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: `${client.user.avatarURL}`,
                    text: 'Satomi | created by stellarsdev @github'
                }}}).catch(this.logger.error);
        } else if (args.commands == 'commands') {
            return responder.send(`${msg.author.mention}`, {embed: {
                title: 'Satomi Commands!',
                description: 'Prefix: s. | type s.help for more help',
                color: 0xea9a94,
                author: {
                    name: 'Satomi',
                    icon_url: `${client.user.avatarURL}`
                },
                fields: [{
                    name: 'Command Categories',
                    value: '`admin-Mod:` restricted commands for mods and admins of a server.' +
                    '\n`botinfo:` shows info about the bot.' +
                    '\n`fun:` include games and other fun commands.' +
                    '\n`music:` commands that let satomi play audio in a voice channel.' +
                    '\n`owner:` these commands are not avaiable publicly, only stellars can use them' +
                    '\n`utility:` commands with search functionality for games and discord servers.'
                },
                {
                    name: 'How to use?',
                    value: '`s.commands categoryName` will return with the commands in that category' +
                    '\n example: `s.commands fun`'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: `${client.user.avatarURL}`,
                    text: 'Satomi | created by stellarsdev @github'
                }
            }}).catch(this.logger.error);
        }
    }
}

module.exports = Help;