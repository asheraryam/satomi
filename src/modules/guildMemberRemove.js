//only used for the bot's main server

const chalk = require('chalk');
const masterkeys = require('../../masterkeys.json');

module.exports = satomi = {
    name: 'guilds:memberremove',
    events: {
        guildMemberRemove: 'memberRemove'
    },
    memberRemove: (guild, member, satomi) => satomi.createMessage(masterkeys.memberLog, {embed: {
        color: 0xea9a94,
        author: {
            name: `${guild.name} (${guild.id})`,
            icon_url: `${guild.iconURL}`
        },
        thumbnail: {
            url: `${member.avatarURL}`
        },
        title: `:anger: ${member.username}#${member.discriminator} (${member.id}) has left the server`,
        timestamp: new Date()
    }}).then(satomi.logger.info(chalk.red.bold(`${member.username}#${member.discriminator} (${member.id}) has left ${guild.name}`)))
};