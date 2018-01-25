const { Command } = require('sylphy');

class Hug extends Command {
    constructor (...args) {
        super (...args, {
            name: 'hug',
            group: 'fun',
            cooldown: 0,
            options: { guildsOnly: true },
            usage: [
                { name: 'user', displayName: 'user', type: 'member', optional: false }
            ]
        })
    }

    handle ({ args, client, msg }, responder) {
        if (msg.mentions.length === 0) {
            return responder.send(`${msg.author.mention}, Please mention a user to hug~! owo`);
        }

        const user = msg.channel.guild.members.get(msg.mentions[0].id);

        if (user.id === client.user.id) {
            return responder.send(`Hey, ${msg.author.mention}! Don't hug me, baka!!! :anger:`);
        } else if (user.id === msg.author.id) {
            return responder.send(`${msg.author.mention} Im sorry but, you can't hug yourself :confused:`)
        }

        return responder.send(`${msg.author.mention} hugged ${user.mention}! uwu`).catch(this.logger.error);
    }
}

module.exports = Hug;