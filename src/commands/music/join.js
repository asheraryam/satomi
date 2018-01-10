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
        client.joinVoiceChannel(msg.member.voiceState.channelID).then(() => {
            return responder.send(`${msg.author.mention}` + 'I successfully joined your voice channel~!')
        }).catch(this.logger.error);
    }
}

module.exports = Join;