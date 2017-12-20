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
                value: '`help`: shows info about the bot' +
                '\n`ping`: delivers the amount of ping the bot is experiencing' +
                '\n`stats`: stats about the bot' +
                '\n`commands`: displays the bots commands'
            },
            {
                name: 'Fun',
                value: '`8ball`: ask it a question, and the magic 8 ball with answer it ex. `s.8ball question`' +
                '\n`coinflip`: bot flips a coin, heads or tails' +
                '\n`quotes`: will randomly pick a quote the bot has stored, feel free to recommend some' +
                '\n`urban`: finds a term from urban dictionary ex. `s.urban word` or `s.urban`' +
                '\n`hug`: you hug someone uwu ex, `s.hug @user`' +
                '\n`owo`: owo?' +
                '\n`aesthetic`: turns a phrase into aesthetic font ex. `s.aesthetic phrase`'
            },
            {
                name: 'Mod/Owner',
                value: '`clear`: deletes a set number of messages ex. `s.clear 10`' +
                '\n`announce (adminOnly)`: it does `@everyone` and shows a message ex. `s.announce hi`' +
                '\n`die (ownerOnly)`: shuts the bot down ex. `s.die`'
            },
            {
                name: 'Utility',
                value: '`avatar`: will display a users avatar ex. `s.avatar` or `s.avatar @user`' +
                '\n`serverinfo`: displays info about the server the command was used in' +
                '\n`userinfo`: shows info about a user ex. `s.userinfo @user`' +
                '\n`weather`: shows weather of a city in fahrenheit or celsius ex. `s.weather city f/c`' +
                '\n`osu`: shows osu stats from lemmmy.pw/osusig ex. `s.osu 0 cookiezi`'
            }],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: client.user.username + ' | created by stellarsdev @github'
            }
        }}).catch(this.logger.error)
    }
}

module.exports = Commands
