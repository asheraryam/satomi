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
            prompt: 'Are you sure you want me to shut down? Respond by \`yes\` or \`no\`',
            input: { name: 'choice', type: 'string', choices: ['yes', 'no'] }
        }]);

        if (shutdown.choice === 'yes') {
           this.logger.info(chalk.cyan('[CLIENT] Satomi has shut down'));
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: ':zzz: Satomi has shut down...'
            } })
            .then(async () => await client.shutdown())
            .catch(this.logger.error);
        } else {
            return responder.send('Ok, I will not shut down~ :dango:');
        }
    }
}

module.exports = Shutdown;
