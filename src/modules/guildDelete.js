const chalk = require('chalk')
const guildConfig = require('../assets/guildConfig.json')

module.exports = satomi = {
    name: 'guilds:delete',
    events: {
        guildDelete: 'delGuild'
    },
    delGuild: (guild, satomi) => satomi.createMessage(guildConfig.botLog, {embed: {
        color: 0x66dac3,
        author: {
            name: `${guild.name} (${guild.id})`,
            icon_url: `${guild.iconURL}`
        },
        title: `Satomi has left "${guild.name}" with ${guild.memberCount} members :skull:`,
        timestamp: new Date()
    }}).then(satomi.logger.info(chalk.red.bold(`Satomi has left "${guild.name}" (${guild.id})`)))
}