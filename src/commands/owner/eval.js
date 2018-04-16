const { Command } = require('sylphy');
const util = require('util');

class Eval extends Command {
    constructor(...args) {
        super(...args, {
            name: 'eval',
            group: 'owner',
            cooldown: 0,
            options: { guildOnly: true },
            usage: [
                { name: 'file', displayName: 'file', type: 'string', optional: false, last: true }
            ]
        });
    }

    async handle ({ msg }, responder) {
        if (msg.author.id !== process.env.OWNER_ID) {
            return;
        }

        const file = msg.content.substring(`${process.env.CLIENT_PREFIX}eval`.length);

        var code = await eval(file);

        try {
            if (code.toString() === '[object Object]') {
                code = util.inpect(code);
            }

        // return responder.send('```javascript' + `\n\u200b${code.toString()}` + '\n```')
        } catch (error) {
            this.logger.error;
            return responder.send(`\`\`\`javascript\n${error}\`\`\``);
        }
    }
}

module.exports = Eval;
