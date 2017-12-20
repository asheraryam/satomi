const { Command } = require('sylphy')

class Hug extends Command {
    constructor (...args) {
        super (...args, {
            name: 'hug',
            group: 'fun',
            cooldown: 3,
            options: {guildsOnly: true},
            usage: [
                { name: 'user', displayName: 'user', type: 'member', optional: false }
            ]
        })
    }

    handle ({ args, client, msg }, responder) {
        if (msg.mentions.length === 0) {
            return responder.send(`${msg.author.mention}, Please mention a user to hug~!`)
        }

        const user = msg.channel.guild.members.get(msg.mentions[0].id)

        if (user.id === client.user.id) {
            return responder.send(`Hey, ${msg.author.mention}! I dont want a hug from you :anger:`, {embed:{
                color: 0xff4b4b,
                image: {
                    url: 'https://stellarsdev.github.io/types/getoffofme.gif'
                }
            }})
        } else if (user.id === msg.author.id) {
            return responder.send(`${msg.author.mention} Im sorry but, you cant hug yourself :confused:`)
        }

        return responder.send(`${msg.author.mention} hugged ${user.mention}! owo`, {embed:{
            color: 0x66dac3,
            image: {
                url: 'https://stellarsdev.github.io/types/hug.gif'
            }
        }})
        .catch(this.logger.error)
    }
}

module.exports = Hug
