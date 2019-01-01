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
        const footerText = `Requested by ${msg.author.username}#${msg.author.discriminator}`;

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
                    value: '`8ball`, `advice`, `aesthetic`, `choose`, `coinflip`, `hug`, `owo`, `ratewaifu`, `urban`'
                },
                {
                    name: 'moderation',
                    value: '`ban`, `goodbye`, `kick`, `mute`, `poll`, `purge`, `setlogs`, `setnsfw`, `ssar`, `unmute`, `welcome`'
                },
                {
                    name: 'search',
                    value: '`catgirl`, `osu`, `overwatch`, `weather`'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
                    text: footerText
                } } }).catch(this.logger.error);
        } else if (command === 'about') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for About (basic)',
                description: 'Displays useful information about Satomi',
                fields: [{
                    name: 'Usage',
                    value: 's.about',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.about',
                    inline: false
                },
                {
                    name: 'Aliases',
                    value: 's.about, s.info',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
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
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.avatar @Satomi or s.avatar',
                    inline: false
                },
                {
                    name: 'Aliases',
                    value: 's.avatar, s.profilepicture, s.profilepic',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
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
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.help or s.help ratewaifu',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
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
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.ping',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
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
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.role add nsfw, s.role remove nsfw, s.role list',
                    inline: false
                },
                {
                    name: 'Extra Args',
                    value: 'add - tells Satomi to add the role to you' +
                    '\nremove - tells Satomi to remove the role from you' +
                    '\nlist - lists all roles available to you',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
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
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.stats',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
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
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.serverinfo',
                    inline: false
                },
                {
                    name: 'Aliases',
                    value: 's.serverinfo, s.server',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
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
                    value: 's.userinfo, s.userinfo @user or s.userinfo <user_id>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.userinfo, s.userinfo @Satomi or s.userinfo 12345678910111213141',
                    inline: false
                },
                {
                    name: 'Aliases',
                    value: 's.userinfo, s.user',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
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
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.8ball am i a weeb?',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
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
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.advice',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'aesthetic') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Aesthetic (fun)',
                description: 'makes your text more a e s t h e t ic',
                fields: [{
                    name: 'Usage',
                    value: 's.aesthetic <phrase>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.aesthetic i have no life',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
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
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.choose pizza, poutine, koreanbbq',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
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
                    value: 's.coinflip or s.coinflip <guess>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.coinflip or s.coinflip heads',
                    inline: false
                },
                {
                    name: 'Aliases',
                    value: 's.coinflip, s.flip, s.coin',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
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
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.hug @Satomi',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'owo') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Owo (fun)',
                description: 'makes your text owo uwu, add "!" adds a face',
                fields: [{
                    name: 'Usage',
                    value: 's.owo <phrase>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.owo catgirls are for degenerates!',
                    inline: false
                },
                {
                    name: 'Aliases',
                    value: 's.owo, s.uwu',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
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
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.ratewaifu @Satomi',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
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
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.urban eGirl or s.urban',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'autorole') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for AutoRole (moderation)',
                description: '[USERS WITH MANAGE ROLES PERMISSION] Sets the auto-role for new members',
                fields: [{
                    name: 'Usage',
                    value: 's.autorole <options> <role>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.autorole add Member\ns.autorole remove',
                    inline: false
                },
                {
                    name: 'Extra Args',
                    value: 'add - sets the role to give automatically' +
                    '\nremove - turns off autorole',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'ban') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Ban (moderation)',
                description: '[USERS WITH BAN PERMISSION] Bans a member from the server and set days worth of messages to delete (Default is 0)',
                fields: [{
                    name: 'Usage',
                    value: 's.ban @member <days_msg> <reason>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.ban @RandomTroll 7 being a spam bot',
                    inline: false
                },
                {
                    name: 'Extra Args',
                    value: 'days_msg - (optional) how many days of messages to delete from them' +
                    '\nreason - (optional) why you banned them',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'goodbye') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Goodbye (moderation)',
                description: '[USERS WITH MANAGE CHANNELS PERMISSION] Sets the channel for goodbye messages',
                fields: [{
                    name: 'Usage',
                    value: 's.goodbye (a prompt will appear)',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.goodbye',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
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
                    value: 's.kick @member <reason>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.kick @RandomTroll being a spam bot',
                    inline: false
                },
                {
                    name: 'Extra Args',
                    value: 'reason - (optional) why you kicked them',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'mute') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Mute (moderation)',
                description: '[USERS WITH MUTE MEMBERS PERMISSION] mute a member',
                fields: [{
                    name: 'Usage',
                    value: 's.mute @member <options>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.mute @RandomTroll full',
                    inline: false
                },
                {
                    name: 'Aliases',
                    value: 's.mute, s.gag',
                    inline: false
                },
                {
                    name: 'Extra Args - Options',
                    value: 'text - (default) gives them a role that doesnt allow message sending' +
                    '\nvoice - mutes them from speaking in voice channels' +
                    '\nfull - mutes them from text and voice',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'unmute') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Unmute (moderation)',
                description: '[USERS WITH MUTE MEMBERS PERMISSION] unmute a member',
                fields: [{
                    name: 'Usage',
                    value: 's.unmute @member <options>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.unmute @RandomTroll full',
                    inline: false
                },
                {
                    name: 'Aliases',
                    value: 's.unmute, s.ungag',
                    inline: false
                },
                {
                    name: 'Extra Args - Options',
                    value: 'text - (default) removes the mute role that doesnt allow message sending' +
                    '\nvoice - unmutes them from voice channels' +
                    '\nfull - unmutes them from text and voice',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
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
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.poll Should we add more roles?',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
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
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.purge 10',
                    inline: false
                },
                {
                    name: 'Aliases',
                    value: 's.purge, s.clear, s.delete',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'setlogs') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for SetLogs (moderation)',
                description: '[USERS WITH MANAGE CHANNELS PERMISSION] Sets the channel for logs',
                fields: [{
                    name: 'Usage',
                    value: 's.setlogs on\ns.setlogs off',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.setlogs on\ns.setlogs off',
                    inline: false
                },
                {
                    name: 'Extra Args',
                    value: 'on - sets the current channel for logs' +
                    '\noff - turns off sending logs in that channel',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
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
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.setnsfw\ns.setnsfw on\ns.setnsfw off',
                    inline: false
                },
                {
                    name: 'Extra Args',
                    value: 'off - takes away the nsfw label, nsfw content not allowed' +
                    '\non - adds the nsfw label, nsfw content allowed',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
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
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.ssar add nsfw\ns.ssar remove nsfw',
                    inline: false
                },
                {
                    name: 'Extra Args',
                    value: 'add - adds the role to the bots database for assignability' +
                    '\nremove - removes the role from the bots database, making it unable to assign the role',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
                    text: footerText
                }
            } }).catch(this.logger.error);
        } else if (command === 'welcome') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: 'Help for Welcome (moderation)',
                description: '[USERS WITH MANAGE CHANNELS PERMISSION] Sets the channel for welcome messages',
                fields: [{
                    name: 'Usage',
                    value: 's.welcome (a prompt will appear)',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.welcome',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
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
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.catgirl or s.catgirl nsfw',
                    inline: false
                },
                {
                    name: 'Extra Args',
                    value: 'nsfw - tells Satomi to search for lewd Catgirls',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
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
                    value: 's.osu <searchtype> <user>',
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.osu cookiezi',
                    inline: false
                },
                {
                    name: 'Search Types',
                    value: '<none>, sig, profile, best, recent',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
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
                    inline: false
                },
                {
                    name: 'Example',
                    value: 's.overwatch p pc na Surefour#2559',
                    inline: false
                },
                {
                    name: 'Extra Args',
                    value: '**Types -**\nprofile, p | competitive, comp, c | quickplay, quick, q' +
                    '\n**Platforms -**\npc, xbl, psn' +
                    '\n**Regions** -\nna, eu, kr, cn, global',
                    inline: false
                },
                {
                    name: 'Aliases',
                    value: 's.overwatch, s.ow',
                    inline: false
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
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
                    value: 's.weather <tempScale> <city>'
                },
                {
                    name: 'Example',
                    value: 's.weather f Los Angeles or s.weather Los Angeles'
                },
                {
                    name: 'Temperature Scales',
                    value: 'f = Fahrenheit\nc = Celsius'
                },
                {
                    name: 'Aliases',
                    value: 's.weather, s.w'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: msg.author.avatarURL,
                    text: footerText
                }
            } }).catch(this.logger.error);
		}
    }
}

module.exports = Help;
