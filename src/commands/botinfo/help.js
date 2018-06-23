const { Command } = require('sylphy');

class Help extends Command {
    constructor (...args) {
        super (...args, {
            name: 'help',
            group: 'botinfo',
            cooldown: 2,
            options: { guildOnly: true },
            usage: [
                { name: 'categories', displayName: 'categories', type: 'string', optional: true, last: true }
            ]
        });
    }

    handle ({ args, client, msg }, responder) {
        if (args.categories !== 'categories') {
            return responder.send(msg.author.mention, {embed: {
                title: 'Satomi, Help!',
                description: 'hopefully this command solves your question(s), every 2 minutes, the status changes ~',
                color: client.hexColor,
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
                    name: 'Commands',
                    value: '`s.help categories:` will return with all command categories available' +
                    '\n`s.extended command_name:` shows extended info about a command'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: 'Satomi | created by envyist @github/twitter'
                }}}).catch(this.logger.error);
        } else if (args.categories === 'categories') {
            return responder.send(msg.author.mention, {embed: {
                title: 'Satomi Commands!',
                description: 'Prefix: s. | type s.help for more help',
                color: client.hexColor,
                author: {
                    name: 'Satomi',
                    icon_url: client.user.avatarURL
                },
                fields: [{
                    name: 'Command Categories',
                    value: '`moderation:` restricted commands for mods and admins of a server.' +
                    '\n`botinfo:` shows info about the bot.' +
                    '\n`fun:` include games and other fun commands.' +
                    '\n`nsfw:` for all your naughty desires.' +
                    '\n`owner:` these commands are not avaiable publicly, only stellars can use them' +
                    '\n`search:` commands with search functionality for games and discord servers.'
                },
                {
                    name: 'How to use?',
                    value: '`s.commands category_name` will return with the commands in that category' +
                    '\n example: `s.commands fun`'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: 'Satomi | created by envyist @github/twitter'
                }
            }}).catch(this.logger.error);
        }
    }
}

module.exports = Help;
