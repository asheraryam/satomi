const { Command } = require('sylphy')

class Avatar extends Command {
    constructor (...args) {
        super (...args, {
            name: 'avatar',
            group: 'utility',
            aliases: ['profilepicture', 'profilepic'],
            cooldown: 0,
            options: {guildsOnly: true}
        })
    }

    handle ({ args, client, msg }, responder) {
        const user = msg.mentions[0] || msg.author
        const avatarURL = user.dynamicAvatarURL('png', 256)

        return responder.format('emoji:camera').send(`${msg.author.mention} **${user.username}**'s Avatar:\n ${avatarURL}`)
        .catch(this.logger.error)
    }
}

module.exports = Avatar
