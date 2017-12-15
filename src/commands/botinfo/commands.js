const { Command } = require('sylphy')

class Commands extends Command {
    constructor (...args) {
        super (...args, {
            name: 'commands',
            group: 'botinfo',
            cooldown: 5,
            options: {guildsOnly: true}
        })
    }

    handle ({ args, client, msg}, responder) {
        if (msg.content === 's.commands public') {
            return responder.send(`${msg.author.mention}`, {embed: {
                title: 'Satomi, Public Commands!',
                description: 'Prefix: s. | type s.help for more help',
                color: 0x66dac3,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                fields: [{
                    name: 'Bot Info',
                    value: '`help`: shows info about the bot' +
                    '\n`ping`: delivers the amount of ping the bot is experiencing' +
                    '\n`commands`: displays the bots commands ex. `s.commands public` or `s.commands private`'
                },
                {
                    name: 'Fun',
                    value: '`8ball`: ask it a question, and the magic 8 ball with answer it ex. `s.8ball question`' +
                    '\n`coinflip`: bot flips a coin, heads or tails' +
                    '\n`quotes`: will randomly pick a quote the bot has stored, feel free to recommend some' +
                    '\n`urban`: finds a term from urban dictionary ex. `s.urban word` or `s.urban`' +
                    '\n`ivy`: theyre for the best girl, enjoy :3' +
                    '\n`aesthetic`: turns a phrase into aesthetic font ex. `s.aesthetic phrase`'
                },
                {
                    name: 'Utility',
                    value: '`avatar`: will display a users avatar ex. `s.avatar` or `s.avatar @user`' +
                    '\n`serverinfo`: displays info about the server the command was used in' +
                    '\n`userinfo`: shows info about a user ex. `s.userinfo @user`' +
                    '\n`weather`: shows weather of a city in fahrenheit or celsius ex. `s.weather city f/c`'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: client.user.username + ' | created by stellarsdev @github'
                }
            }})
        } else if (msg.content === 's.commands private') {
            return responder.send(`${msg.author.mention}`, {embed: {
                title: 'Satomi, Private Commands!',
                description: 'Prefix: s. | type s.help for more help',
                color: 0x66dac3,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                fields: [{
                    name: 'Moderation (Reasons are optional)',
                    value: '`clear`: deletes a set number of messages in a channel ex `s.clear 10`'
                },
                {
                    name: 'Owner (me stellars, or whoever stole my code and is the owner of that application)',
                    value: '`die`: puts the bot offline, disconnecting it from discord servers' +
                    '\n`announce`: basically an announcement command, it does `@everyone` ;D'
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
}

module.exports = Commands
