const { Command } = require('sylphy');

class Extended extends Command {
    constructor(...args) {
        super(...args, {
            name: 'extended',
            group: 'botinfo',
            cooldown: 0,
            options: { guildOnly: true },
            usage: [
                { name: 'command', displayName: 'command', type: 'string', optional: true, last: true }
            ]
        });
    }

    handle ({ args, client }, responder) {
        const command = args.command;
        const footerText = ' | created by envyist @github/twitter';

        if (!command) {
            return responder.send(' ', {embed: {
                color: 0xffd7ee,
                title: 'Please specify a command for more help! :anger:',
                description: 'see `s.commands` for the list',
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: footerText
                }
            }}).catch(this.logger.error);
        }
    }
}

module.exports = Extended;
