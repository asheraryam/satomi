const { Command } = require('sylphy');

class Ping extends Command {
    constructor (...args) {
        super(...args, {
            name: 'ping',
            group: 'botinfo',
            cooldown: 10,
            options: { guildOnly: true }
        });
    }

    handle ({ client, msg }, responder) {
        return responder.send(' ', {embed: {
            color: client.hexColor,
            description: `${msg.author.mention} | **Pong! - ${msg.channel.guild.shard.latency} ms** :dango:`
        }}).catch(this.logger.error);
    }
}

module.exports = Ping;
