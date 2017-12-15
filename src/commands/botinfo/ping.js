const { Command } = require('sylphy')

class Ping extends Command {
    constructor (...args) {
        super(...args, {
            name: 'ping',
            group: 'botinfo',
            cooldown: 10,
            options: {guildsOnly: true}
        })
    }

    handle ({ args, client, msg }, responder) {
        return responder.send(' ', {embed: {
            color: 0x66dac3,
            description: `${msg.author.mention} | **Pong! - ${msg.channel.guild.shard.latency} ms** :dango:`,
        }}).catch(this.logger.error)
    }
}

module.exports = Ping
