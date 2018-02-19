const { Command } = require('sylphy');

class Avatar extends Command {
    constructor (...args) {
        super (...args, {
            name: 'avatar',
            group: 'utility',
            aliases: ['profilepicture', 'profilepic'],
            cooldown: 0,
            options: { guildOnly: true }
        });
    }

    handle ({ msg }, responder) {
        const user = msg.mentions[0] || msg.author;
        const avatarURL = user.dynamicAvatarURL('png', 256);

        return responder.send(`:camera: ${msg.author.mention} **${user.username}**'s Avatar:\n ${avatarURL}`)
        .catch(this.logger.error);
    }
}

module.exports = Avatar;
