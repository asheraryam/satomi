const { Command } = require('sylphy');
const owofy = require('owofy');

class Owo extends Command {
    constructor (...args) {
        super (...args, {
            name: 'owo',
            group: 'fun',
            aliases: ['uwu'],
            cooldown: 2,
            options: { guildOnly: true },
            usage: [
                { name: 'phrase', displayName: 'phrase', type: 'string', optional: true, last: true }
            ]
        });
    }

    handle ({ args, client, msg }, responder) {
        const phrase = args.phrase;

        if (!phrase) {
            return responder.send(' ', { embed: {
                color: client.redColor,
                title: 'OwO Error',
                description: 'please provide a word or phrase to owo uwu ^~^'
            } }).catch(this.logger.error);
        }

        return responder.send(`${msg.author.mention} ${owofy(phrase)}`).catch(this.logger.error);
    }
}

module.exports = Owo;
