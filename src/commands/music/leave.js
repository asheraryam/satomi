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
        try {
            client.leaveVoiceChannel(msg.member.voiceState.channelID);
            return responder.send(`${msg.author.mention} I have successfully left your voice channel~!`);
        } catch(error) {
            this.logger.error;
        }
    }
}

module.exports = Leave;