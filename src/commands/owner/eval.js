const { Command } = require('sylphy');
const masterkeys = require('../../../masterkeys.json');

class Eval extends Command {
    constructor(...args) {
        super(...args, {
            name: 'eval',
            group: 'owner',
            cooldown: 0,
            options: {guildsOnly: true},
            usage: [
                { name: 'file', displayName: 'file', type: 'string', optional: false, last: true }
            ]
        })
    }

    async handle ({ args, client, msg }, responder) {
        if (msg.author.id === masterkeys.ownerID) {
            const file = msg.content.substring(`${masterkeys.prefix}eval`.length);

            const code = await eval(file);

            try {
                if (code.toString() === '[object Object]') {
                    code = util.inpect(code);
                }
            
                // return responder.send('```javascript' + `\n\u200b${code.toString()}` + '\n```')
            } catch(error) {
                this.logger.error;
                return responder.send(`\`\`\`javascript\n${error}\`\`\``);
            };
        }
    }
}

module.exports = Eval;