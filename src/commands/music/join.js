const { Command } = require('sylphy');

class Join extends Command {
    constructor(...args) {
        super(...args, {
            name: 'join',
            aliases: ['jv'],
            group: 'music',
            cooldown: 0,
            options: { guildsOnly: true }
        })
    }

    handle ({ args, client, msg }, responder) {
        try {
            client.joinVoiceChannel(msg.member.voiceState.channelID);
            return responder.send(`${msg.author.mention} I have successfully joined your channel~!`);
        } catch(error) {
            this.logger.error;
        }
    }
}

module.exports = Join;