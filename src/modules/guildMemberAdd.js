const chalk = require('chalk')
const guildConfig = require('../assets/guildConfig.json')

module.exports = satomi = {
    name: 'guilds:memberjoin',
    events: {
        guildMemberAdd: 'memberJoin'
    },
    memberJoin: (guild, member, satomi) => satomi.createMessage(guildConfig.memberLog, {embed: {
        color: 0x66dac3,
        author: {
            name: `${guild.name} (${guild.id})`,
            icon_url: `${guild.iconURL}`
        },
        thumbnail: {
            url: `${member.avatarURL}`
        },
        title: `:ribbon: ${member.username}#${member.discriminator} (${member.id}) has joined the server`,
        timestamp: new Date()
    }}).then(satomi.logger.info(chalk.green.bold(`${member.username}#${member.discriminator} (${member.id}) has joined ${guild.name}`)))
}