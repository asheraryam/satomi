const { Command } = require('sylphy');

class Leave extends Command {
    constructor(...args) {
        super(...args, {
            name: 'leave',
            aliases: ['lv'],
            group: 'music',
            cooldown: 0,
            options: { guildsOnly: true }
        })
    }

    handle ({ args, client, msg }, responder) {
        client.leaveVoiceChannel(msg.member.voiceState.channelID).then(() => {
            return responder.send(`${msg.author.mention}` + 'I successfully left your voice channel~!')
        }).catch(this.logger.error);
    }
}

module.exports = Leave;