const { Command } = require('sylphy');

class Help extends Command {
    constructor (...args) {
        super (...args, {
            name: 'help',
            group: 'basic',
            cooldown: 2,
            options: { guildOnly: true },
            usage: [
                { name: 'command', displayName: 'command', type: 'string', optional: true, last: true }
            ]
        });
    }

    handle ({ args, client, msg }, responder) {
        const command = args.command;
        const footerText = ' | created by kyostra @github/twitter';

        if (!command) {
            return responder.send(msg.author.mention, { embed: {
                color: client.satomiColor,
                title: 'Satomi, Help!',
                description: 'for further info, do **s.help command_name** (ex. s.help catgirl)',
                author: {
                    name: 'Satomi',
                    icon_url: client.user.avatarURL
                },
                fields: [{
                    name: 'basic',
                    value: '`avatar`, `help`, `about`, `ping`, `role`, `serverinfo`, `stats`, `userinfo`'
                },
                {
                    name: 'fun',
                    value: '`8ball`, `advice`, `choose`, `coinflip`, `hug`, `ratewaifu`, `urban`'
                },
                {
                    name: 'moderation',
                    value: '`ban`, `kick`, `poll`, `purge`, `setnsfw`, `ssar`'
                },
                {
                    name: 'search',
                    value: '`catgirl`, `osu`, `overwatch`, `weather`'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: 'Satomi | created by kyostra @github/twitter'
                } } }).catch(this.logger.error);
        } else if (command === 'about') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for About (basic)',
                description: 'Displays useful information about Satomi',
                fields: [{
                    name: 'Usage',
                    value: 's.about',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.about',
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'avatar') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Avatar (basic)',
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
            } }).catch(this.logger.error);
        } else if (command === 'help') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Help (basic)',
                description: 'Displays useful information about Satomi',
                fields: [{
                    name: 'Usage',
                    value: 's.help or s.help <command name>',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.help or s.help ratewaifu',
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'ping') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Ping (basic)',
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
            } }).catch(this.logger.error);
        } else if (command === 'role') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Role (basic)',
                description: 'Adds, removes, and lists roles. Roles above satomi\'s role are not addable/removeable',
                fields: [{
                    name: 'Usage',
                    value: 's.role add <role>, s.role remove <role> or s.role list',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.role add nsfw, s.role remove nsfw, s.role list',
                    inline: true
                },
                {
                    name: 'Extra Args',
                    value: 'add - tells Satomi to add the role to you' +
                    '\nremove - tells Satomi to remove the role from you' +
                    '\nlist - lists all roles available to you'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'stats') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Stats (basic)',
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
            } }).catch(this.logger.error);
        } else if (command === 'serverinfo') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Serverinfo (basic)',
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
            } }).catch(this.logger.error);
        } else if (command === 'userinfo') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Userinfo (basic)',
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
            } }).catch(this.logger.error);
        } else if (command === '8ball') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for 8ball (fun)',
                description: 'Ask a question and get an answer back',
                fields: [{
                    name: 'Usage',
                    value: 's.8ball <question>',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.8ball am i a weeb?',
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'advice') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Advice (fun)',
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
            } }).catch(this.logger.error);
        } else if (command === 'choose') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Choose (fun)',
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
            } }).catch(this.logger.error);
        } else if (command === 'coinflip') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Coinflip (fun)',
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
            } }).catch(this.logger.error);
        } else if (command === 'hug') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Hug (fun)',
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
            } }).catch(this.logger.error);
        } else if (command === 'ratewaifu') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for RateWaifu (fun)',
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
            } }).catch(this.logger.error);
        } else if (command === 'urban') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Urban (fun)',
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
            } }).catch(this.logger.error);
        } else if (command === 'ban') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Ban (moderation)',
                description: '[USERS WITH BAN PERMISSION] Bans a member from the server and set days worth of messages to delete (Default is 7)',
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
            } }).catch(this.logger.error);
        } else if (command === 'kick') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Kick (moderation)',
                description: '[USERS WITH KICK PERMISSION] Kicks a member from the server',
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
            } }).catch(this.logger.error);
        } else if (command === 'poll') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Poll (moderation)',
                description: '[USERS WITH MANAGE MESSAGES PERMISSION] Cast a poll for members',
                fields: [{
                    name: 'Usage',
                    value: 's.poll <topic/message>',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.poll Should we add more roles?',
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'purge') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Purge (moderation)',
                description: '[USERS WITH MANAGE MESSAGES PERMISSION] Deletes a set amount of messages in a channel',
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
            } }).catch(this.logger.error);
        } else if (command === 'setnsfw') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for SetNSFW (moderation)',
                description: '[USERS WITH MANAGE CHANNELS PERMISSION] Changes a channel to enable NSFW content',
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
            } }).catch(this.logger.error);
        } else if (command === 'ssar') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Ssar (moderation)',
                description: '[USERS WITH MANAGE ROLES PERMISSION] Adds a role to the database for assignability',
                fields: [{
                    name: 'Usage',
                    value: 's.ssar add <rolename>\ns.ssar remove <rolename>',
                    inline: true
                },
                {
                    name: 'Example',
                    value: 's.ssar add nsfw\ns.ssar remove nsfw',
                    inline: true
                },
                {
                    name: 'Extra Args',
                    value: 'add - adds the role to the bots database for assignability' +
                    '\nremove - removes the role from the bots database, making it unable to assign the role'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'catgirl') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Catgirl (search)',
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
            } }).catch(this.logger.error);
        } else if (command === 'osu') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Osu (search)',
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
            } }).catch(this.logger.error);
        } else if (command === 'overwatch') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Overwatch (search)',
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
            } }).catch(this.logger.error);
        } else if (command === 'weather') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Weather (search)',
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
            } }).catch(this.logger.error);
		}
    }
}

module.exports = Help;
