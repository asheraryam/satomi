const chalk = require('chalk')
const guildConfig = require('../assets/guildConfig.json')

module.exports = satomi = {
    name: 'guilds:memberremove',
    events: {
        guildMemberRemove: 'memberRemove'
    },
    memberRemove: (guild, member, satomi) => satomi.createMessage(guildConfig.memberLog, {embed: {
        color: 0x66dac3,
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
}