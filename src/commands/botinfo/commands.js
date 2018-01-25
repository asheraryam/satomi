const { Command } = require('sylphy');

class Commands extends Command {
    constructor (...args) {
        super (...args, {
            name: 'commands',
            group: 'botinfo',
            cooldown: 0,
            options: { guildsOnly: true },
            usage: [
                { name: 'category', displayName: 'category', type: 'string', optional: true, last: true }
            ]
        })
    }

    handle ({ args, client, msg }, responder) {
        const category = args.category;

        if (category == 'admin-mod' || category == 'admin' || category == 'mod') {
            return responder.send(' ', {embed: {
                color: 0xea9a94,
                author: {
                    name: 'Satomi',
                    icon_url: `${client.user.avatarURL}`
                },
                title: 'Admin and Mod Commands~',
                fields: [{
                    name: '------------------',
                    value: '`announce:` admins can make an announcement (it does @everyone)' +
                    '\n`purge:` deletes a number of messages you give it'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: ' | created by envyist @github/twitter'
                }
            }}).catch(this.logger.error);
        } else if (category == 'botinfo' || category == 'info') {
            return responder.send(' ', {embed: {
                color: 0xea9a94,
                author: {
                    name: 'Satomi',
                    icon_url: `${client.user.avatarURL}`
                },
                title: 'Bot Info Commands~',
                fields: [{
                    name: '------------------',
                    value: '`commands:` see `s.help` for info' +
                    '\n`extended:` displays more info about a command (work in progress)' +
                    '\n`help:` contains links and info to help ease problems with satomi' +
                    '\n`ping:` shows the current ping the bot has to discord servers/api' +
                    '\n`stats:` shows stats about satomi~'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: ' | created by envyist @github/twitter'
                }
            }}).catch(this.logger.error);
        } else if (category == 'fun') {
            return responder.send(' ', {embed: {
                color: 0xea9a94,
                author: {
                    name: 'Satomi',
                    icon_url: `${client.user.avatarURL}`
                },
                title: 'Fun Commands~',
                fields: [{
                    name: '------------------',
                    value: '`8ball:` ask a question and satomi returns an 8ball answer~' +
                    '\n`coinflip`: flips heads or tails' +
                    '\n`hug:` @ someone to send them a hug uwu' +
                    '\n`owo:` owo, whats this?' +
                    '\n`urban:` searches urban dictionary for your word or a random one'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: ' | created by envyist @github/twitter'
                }
            }}).catch(this.logger.error);
        // } else if (category == 'music') {
        //     return responder.send(' ', {embed: {
        //         color: 0xea9a94,
        //         author: {
        //             name: 'Satomi',
        //             icon_url: `${client.user.avatarURL}`
        //         },
        //         title: 'Music Commands~',
        //         fields: [{
        //             name: '(only join/leave work, this is all work in progress >.<)',
        //             value: '`join:` satomi joins your current voice channel' +
        //             '\n`leave:` satomi leaves the voice channel shes in' +
        //             '\n`listenmoe:` plays the listen.moe stream in the voice channel' +
        //             '\n`play:` plays the audio from the link given' +
        //             '\n`pause:` pauses the current audio streaming (not for listen.moe)'
        //         }],
        //         timestamp: new Date(),
        //         footer: {
        //             icon_url: client.user.avatarURL,
        //             text: ' | created by envyist @github/twitter'
        //         }
        //     }}).catch(this.logger.error);
        } else if (category == 'utility' || category == 'util') {
            return responder.send(' ', {embed: {
                color: 0xea9a94,
                author: {
                    name: 'Satomi',
                    icon_url: `${client.user.avatarURL}`
                },
                title: 'Utility Commands~',
                fields: [{
                    name: '------------------',
                    value: '`avatar:` @ a user and it shows their current avatar' +
                    '\n`osu:` displays an image sig of an osu account' +
                    '\n`overwatch:` shows overwatch stats from the given player' +
                    '\n`serverinfo:` shows info about the server' +
                    '\n`userinfo:` @ a user and it shows info about a user' +
                    '\n`weather:` displays weather info about a city'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: ' | created by envyist @github/twitter'
                }
            }}).catch(this.logger.error);
        } else {
            return responder.send(' ', {embed: {
                color: 0xea9a94,
                author: {
                    name: 'Satomi',
                    icon_url: `${client.user.avatarURL}`
                },
                title: 'Please choose a category! :anger:',
                fields: [{
                    name: 'Categories',
                    value: '- admin-info\n- botinfo\n- fun\n- musisc (not available)\n - utility'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: ' | created by envyist @github/twitter'
                }
            }}).catch(this.logger.error);
        }
    }
}

module.exports = Commands;