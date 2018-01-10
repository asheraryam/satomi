const { Command } = require('sylphy');

class Owo extends Command {
    constructor (...args) {
        super(...args, {
            name: 'owo',
            group: 'fun',
            cooldown: 0,
            options: { guildsOnly: true }
        })
    }

    handle ({ args, client, msg }, responder) {
        return responder.send('owo?', {embed: {
            color: 0xf7e1ff,
            image: {
                url: 'https://stellarsdev.github.io/types/owo-whats-this.gif'
            }
        }}).catch(this.logger.error);
    }
}

module.exports = Owo;