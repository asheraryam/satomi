const { Command } = require('sylphy');
const moment = require('moment');

class ServerInfo extends Command {
    constructor (...args) {
        super (...args, {
            name: 'serverinfo',
            group: 'utility',
            aliases: ['server'],
            cooldown: 0,
            options: { guildsOnly: true }
        });
    }

    handle ({ client, msg }, responder) {
        const server = msg.channel.guild;

        return responder.send(' ', {
            embed: {
                title: `${server.name}` + ' ' + `(${server.id})`,
                description: 'Owner: ' + `<@!${server.ownerID}>`,
                author: {
                    name: 'Server Information:',
                    icon_url: client.user.avatarURL
                },
                color: 0xea9a94,
                thumbnail: {
                    url: server.iconURL
                },
                fields: [{
                    name: 'Members Info',
                    value: 'Members: ' + server.memberCount +
                    '\nRoles: ' + Object.keys(`${server.roles}`).length +
                    '\nBans: ' + Object.keys(server.getBans).length,
                    inline: true
                },
                {
                    name: 'Channels',
                    value: 'Text & Voice: ' + Object.keys(`${server.channels}`).length + '\nAFK Voice: ' + `<#${server.afkChannelID}>`,
                    inline: true
                },
                {
                    name: 'Other Info',
                    value: 'Shard Number: ' + Object.keys(server.shard).length +
                    '\nRegion: ' + server.region +
                    '\nEmojis: ' + Object.keys(server.emojis).length,
                    inline: true
                },
                {
                    name: 'Server Created On:',
                    value: `${moment(server.createdAt).format('MMMM Do YYYY, h:mm:ss a')}`,
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: client.user.username
                }
            }
        }).catch(this.logger.error);
    }
}

module.exports = ServerInfo;
