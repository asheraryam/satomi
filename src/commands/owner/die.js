const { Command } = require('sylphy')
const chalk = require('chalk')
const masterkeys = require('../../../masterkeys.json')

class Die extends Command {
    constructor (...args) {
        super(...args, {
            name: 'die',
            group: 'owner',
            aliases: ['selfdestruct', 'coma'],
            cooldown: 5,
            options: {guildsOnly: true}
        })
    }

    handle ({ args, client, msg }, responder) {
        if (msg.author.id === masterkeys.ownerID) {
            console.log(chalk.cyan('Satomi has shut down'))
            return responder.send(' ', {embed: {
                color: 0x66dac3,
                title: ':zzz: | Shutting down...'}})
            .then(client.disconnect())
            .catch(this.logger.error)
        }
    }
}

module.exports = Die
