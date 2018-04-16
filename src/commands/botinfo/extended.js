const { Command } = require('sylphy');

class Extended extends Command {
    constructor(...args) {
        super(...args, {
            name: 'extended',
            group: 'botinfo',
            cooldown: 2,
            options: { guildOnly: true },
            usage: [
                { name: 'command', displayName: 'command', type: 'string', optional: true, last: true }
            ]
        });
    }

    handle ({ args, client }, responder) {
        const command = args.command;
        const footerText = ' | created by envyist @github/twitter';

        if (!command) {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Please specify a command for more help! :anger:',
                description: 'see `s.commands` for the list',
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        }

        if (command === 'announce') {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Extended Help for Announce (moderation)',
                description: 'This command is used to make announcements on a server',
                fields: [{
                    name: 'Usage',
                    value: 's.announce <phrase>',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.announce I love you guys <3',
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        } else if (command === 'purge') {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Extended Help for Purge (moderation)',
                description: 'Deletes a set amount of messages in a channel',
                fields: [{
                    name: 'Usage',
                    value: 's.purge <number>',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.purge 10',
                    inline: true
                },
                {
                    name: 'Aliases',
                    value: 's.purge (main)\ns.clear\ns.delete',
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        } else if (command === 'ban') {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Extended Help for Ban (moderation)',
                description: 'Bans a member from the server (deletes 7 days of messages)',
                fields: [{
                    name: 'Usage',
                    value: 's.ban @member',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.ban @RandomTroll',
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        } else if (command === 'kick') {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Extended Help for Kick (moderation)',
                description: 'Kicks a member from the server',
                fields: [{
                    name: 'Usage',
                    value: 's.kick @member',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.kick @RandomTroll',
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        } else if (command === 'setnsfw') {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Extended Help for SetNSFW (moderation)',
                description: 'Changes a channel to enable NSFW content',
                fields: [{
                    name: 'Usage',
                    value: 's.setnsfw\ns.setnsfw on\ns.setnsfw off',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.setnsfw\ns.setnsfw on\ns.setnsfw off',
                    inline: true
                },
                {
                    name: 'Extra Args',
                    value: 'off - takes away the nsfw label, nsfw content not allowed' +
                    '\non - adds the nsfw label, nsfw content allowed'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        } else if (command === 'commands') {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Extended Help for Commands (botinfo)',
                description: 'Displays the list of commands Satomi has~',
                fields: [{
                    name: 'Usage',
                    value: 's.commands <category>',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.commands fun',
                    inline: true
                },
                {
                    name: 'Categories',
                    value: 'moderation, botinfo, fun, nsfw, search'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        } else if (command === 'extended') {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Extended Help for Extended (botinfo)',
                description: 'Shows extended description of commands',
                fields: [{
                    name: 'Usage',
                    value: 's.extended <command>',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.extended overwatch',
                    inline: true
                },
                {
                    name: 'Commands List?',
                    value: 'please use `s.commands` for the list'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        } else if (command === 'help') {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Extended Help for Help (botinfo)',
                description: 'Displays useful information about Satomi',
                fields: [{
                    name: 'Usage',
                    value: 's.help',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.help',
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        } else if (command === 'ping') {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Extended Help for Ping (botinfo)',
                description: 'Displays the bot\'s ping to Discord servers',
                fields: [{
                    name: 'Usage',
                    value: 's.ping',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.ping',
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        } else if (command === 'stats') {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Extended Help for Stats (botinfo)',
                description: 'Displays stats about Satomi',
                fields: [{
                    name: 'Usage',
                    value: 's.stats',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.stats',
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        } else if (command === '8ball') {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Extended Help for 8ball (fun)',
                description: 'Ask a question and get an answer back',
                fields: [{
                    name: 'Usage',
                    value: 's.8ball <question>',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.8ball are traps gay?',
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        } else if (command === 'advice') {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Extended Help for Advice (fun)',
                description: 'Gives you advice',
                fields: [{
                    name: 'Usage',
                    value: 's.advice',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.advice',
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        } else if (command === 'choose') {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Extended Help for Choose (fun)',
                description: 'Chooses a random word/phrase given',
                fields: [{
                    name: 'Usage',
                    value: 's.choose <word/phrase>, <word/phrase>...',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.choose pizza, poutine, koreanbbq',
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        } else if (command === 'coinflip') {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Extended Help for Coinflip (fun)',
                description: 'Flips a coin',
                fields: [{
                    name: 'Usage',
                    value: 's.coinflip',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.coinflip',
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        } else if (command === 'hug') {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Extended Help for Hug (fun)',
                description: 'Hug a fellow user~',
                fields: [{
                    name: 'Usage',
                    value: 's.hug @user',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.hug @Satomi',
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        } else if (command === 'ratewaifu') {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Extended Help for RateWaifu (fun)',
                description: 'Rate a fellow waifu~',
                fields: [{
                    name: 'Usage',
                    value: 's.ratewaifu @user',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.ratewaifu @Satomi',
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        } else if (command === 'urban') {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Extended Help for Urban (fun)',
                description: 'Searches the Urban Dictionary or give a random word',
                fields: [{
                    name: 'Usage',
                    value: 's.urban <word> or s.urban',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.urban eGirl or s.urban',
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        } else if (command === 'avatar') {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Extended Help for Avatar (search)',
                description: 'Gets the avatar of a user',
                fields: [{
                    name: 'Usage',
                    value: 's.avatar @user or s.avatar',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.avatar @Satomi or s.avatar',
                    inline: true
                },
                {
                    name: 'Aliases',
                    value: 's.avatar (main)\ns.profilepicture\ns.profilepic'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        } else if (command === 'catgirl') {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Extended Help for Catgirl (search)',
                description: 'Sends an image of a catgirl',
                fields: [{
                    name: 'Usage',
                    value: 's.catgirl or s.catgirl nsfw',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.catgirl or s.catgirl nsfw',
                    inline: true
                },
                {
                    name: 'Extra Args',
                    value: 'nsfw - tells Satomi to search for lewd Catgirls'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        } else if (command === 'osu') {
            return responder.send(' ', { embed: {
                color: 0x3b6784,
                title: 'Extended Help for Osu (search)',
                description: 'Posts an image of Osu profile info',
                fields: [{
                    name: 'Usage',
                    value: 's.osu <mode> <user>',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.osu osu cookiezi',
                    inline: true
                },
                {
                    name: 'Modes',
                    value: 'osu, taiko, ctb, mania'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        } else if (command === 'overwatch') {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Extended Help for Overwatch (search)',
                description: 'Grabs Overwatch profile info **(usernames are case sensitive)**',
                fields: [{
                    name: 'Usage',
                    value: 's.overwatch type platform region Username#1234',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.overwatch p pc na Surefour#2559',
                    inline: true
                },
                {
                    name: 'Extra Args',
                    value: '**Types -**\nprofile, pf, p | competitive, comp, c | quickplay, quick, q' +
                    '\n**Platforms -**\npc, xbl, psn' +
                    '\n**Regions** -\nna, eu, kr, cn',
                    inline: true
                },
                {
                    name: 'Aliases',
                    value: 'overwatch (main), ow',
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        } else if (command === 'serverinfo') {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Extended Help for Serverinfo (search)',
                description: 'Shows info about the server',
                fields: [{
                    name: 'Usage',
                    value: 's.serverinfo',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.serverinfo',
                    inline: true
                },
                {
                    name: 'Aliases',
                    value: 's.serverinfo, s.server',
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        } else if (command === 'userinfo') {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Extended Help for Userinfo (search)',
                description: 'Shows info about a user',
                fields: [{
                    name: 'Usage',
                    value: 's.userinfo or s.userinfo @user',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.userinfo or s.userinfo @Satomi',
                    inline: true
                },
                {
                    name: 'Aliases',
                    value: 's.userinfo, s.user',
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        } else if (command === 'weather') {
            return responder.send(' ', {embed: {
                color: 0x3b6784,
                title: 'Extended Help for Weather (search)',
                description: 'Displays weather info from Yahoo!Weather',
                fields: [{
                    name: 'Usage',
                    value: 's.weather <tempScale> <city>',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.weather f Los Angeles or s.weather Los Angeles',
                    inline: true
                },
                {
                    name: 'Temperature Scales',
                    value: 'f = Fahrenheit\nc = Celsius',
                    inline: true
                },
                {
                    name: 'Aliases',
                    value: 's.weather\ns.w',
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
		}
    }
}

module.exports = Extended;
