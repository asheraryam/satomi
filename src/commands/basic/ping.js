const { Command } = require('sylphy');

class Ping extends Command {
    constructor (...args) {
        super(...args, {
            name: 'ping',
            group: 'basic',
            cooldown: 10,
            options: { guildOnly: true }
        });
    }

    handle ({ msg }, responder) {
        return responder.send(' ', { embed: {
            color: 0x98ffa6,
            description: `${msg.author.mention} | **Pong! - ${msg.channel.guild.shard.latency} ms** :dango:`
        } }).catch(this.logger.error);
    }
}

module.exports = Ping;
