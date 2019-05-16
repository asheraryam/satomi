const { Command } = require('sylphy');

class Profile extends Command {
    constructor (...args) {
        super(...args, {
            name: 'profile',
            group: 'basic',
            cooldown: 10,
            options: { guildOnly: true },
            usage: [
                { name: 'member', displayName: 'member', type: 'string', optional: true, last: true }
            ]
        });
    }

    handle ({ args, client, msg }, responder) {
        const member = args.member;
        var user;

        if (!member) {
            user = msg.author.id;
        } else if (member.length >= 17) {
            user = member;
        } else if (msg.mentions > 0) {
            user = msg.mentions[0].id;
        }

        client.mongodb.models.users.findOne({ serverID: msg.channel.guild.id, userID: user }, (error, u) => {
            if (error || !u) {
                return responder.send(`${msg.author.mention} couldn't find Guild or User (BOTS HAVE NO PROFILES)`, { embed: {
                    color: client.redColor,
                    title: 'Profile.Find Error',
                    description: `${error}`,
                    timestamp: new Date()
                } }).catch(this.logger.error);
            }

            return responder.send('', { embed: {
                color: client.satomiColor,
                title: 'User Profile',
                description: `${u.userName}#${u.userDisc}`,
                thumbnail: {
                    url: `${msg.channel.guild.members.get(u.userID).avatarURL}`
                },
                fields: [{
                    name: 'Bio',
                    value: `${u.description}`,
                    inline: true
                },
                {
                    name: 'Level',
                    value: `${u.level}`,
                    inline: true
                },
                {
                    name: 'XP',
                    value: `${u.xp}`,
                    inline: true
                },
                {
                    name: 'Yuri',
                    value: `￥${u.currency}`,
                    inline: true
                }],
                timestamp: new Date()
            } }).catch(this.logger.error);
        }).catch(this.logger.error);
    }
}

module.exports = Profile;
