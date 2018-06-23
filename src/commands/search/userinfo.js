const { Command } = require('sylphy');
const moment = require('moment');

class UserInfo extends Command {
    constructor (...args) {
        super (...args, {
            name: 'userinfo',
            group: 'search',
            aliases: ['user'],
            cooldown: 5,
            options: { guildOnly: true },
            usage: [
                { name: 'member', displayName: 'user', type: 'member', optional: true, last: true }
            ]
        });
    }

    handle ({ client, msg }, responder) {
        if (msg.mentions.length > 0) {
            var user = msg.channel.guild.members.get(msg.mentions[0].id);
        } else {
            user = msg.channel.guild.members.get(msg.member.id);
        }

        return responder.send(' ', {embed: {
            title: 'User Information',
            description: `${user.username}#${user.discriminator} --- Bot? ${user.bot}`,
            color: client.hexColor,
            thumbnail: {
                url: user.avatarURL
            },
            fields: [{
                name: 'Nickname',
                value: `${user.nick !== null ? user.nick: 'None'}`,
                inline: true
            },
            {
                name: 'ID',
                value: `${user.id}`,
                inline: true
            },
            {
                name: 'Status',
                value: `${user.status}`,
                inline: true
            },
            {
                name: 'Game Playing',
                value: `${user.game !== null ? user.game.name: 'None'}`,
                inline: true
            },
            {
                name: 'Roles',
                value: `${user.roles.map((roleid) => {
                    return msg.channel.guild.roles.get(roleid).name;
                }).join(', ') || 'None'}`,
                inline: false
            },
            {
                name: 'Joined Server At',
                value: `${moment(user.joinedAt).format('MMMM Do YYYY')} at ${moment(user.joinedAt).format('h:mm')}`,
                inline: true
            },
            {
                name: 'Created Discord Account',
                value: `${moment(user.createdAt).format('MMMM Do YYYY')} at ${moment(user.createdAt).format('h:mm')}`,
                inline: true
            }],
            timestamp: new Date()
        }}).catch(this.logger.error);
    }
}

module.exports = UserInfo;
