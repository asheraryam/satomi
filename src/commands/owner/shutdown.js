const { Command } = require('sylphy');
const chalk = require('chalk');
const masterkeys = require('../../../masterkeys.json');

class Shutdown extends Command {
    constructor (...args) {
        super(...args, {
            name: 'shutdown',
            group: 'owner',
            aliases: ['die'],
            cooldown: 0,
            options: { guildsOnly: true }
        });
    }

    async handle ({ client, msg }, responder) {
        if (msg.author.id === masterkeys.ownerID) {
            const shutdown = await responder.dialog([{
                prompt: 'Are you sure you want me to shut down? (y/n)',
                input: { name: 'choice', type: 'string', choices: ['y', 'n'] }
            }]);

            if (shutdown.choice === 'y') {
                console.log(chalk.cyan('Satomi has shut down'));
                return responder.send(' ', {embed: {
                    color: 0xea9a94,
                    title: ':zzz: Satomi has shut down...'}})
                .then(client.disconnect())
                .catch(this.logger.error);
            } else {
                return responder.send('Ok, I will not shut down~ :dango:');
            }
        }
    }
}

module.exports = Shutdown;
