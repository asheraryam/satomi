const { Command } = require('sylphy');
const chalk = require('chalk');

class Shutdown extends Command {
    constructor (...args) {
        super(...args, {
            name: 'shutdown',
            group: 'owner',
            aliases: ['die', 'kill'],
            cooldown: 0,
            options: { guildOnly: true }
        });
    }

    async handle ({ client, msg }, responder) {
        if (msg.author.id !== process.env.OWNER_ID) {
            return;
        }

        const shutdown = await responder.dialog([{
            prompt: 'Are you sure you want me to shut down? (y/n)',
            input: { name: 'choice', type: 'string', choices: ['y', 'n'] }
        }]);

        if (shutdown.choice === 'y') {
            console.log(chalk.cyan('Satomi has shut down'));
            return responder.send(' ', { embed: {
                color: 0x98ffa6,
                title: ':zzz: Satomi has shut down...'
            } })
            .then(client.editStatus('invisible', null))
            .then(client.disconnect())
            .catch(this.logger.error);
        } else {
            return responder.send('Ok, I will not shut down~ :dango:');
        }
    }
}

module.exports = Shutdown;
