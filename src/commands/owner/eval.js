/* eslint-disable */

const { Command } = require('sylphy');

class Eval extends Command {
    constructor(...args) {
        super(...args, {
            name: 'eval',
            group: 'owner',
            cooldown: 0,
            options: { guildOnly: true },
            usage: [
                { name: 'eval', displayName: 'eval', type: 'string', optional: false, last: true }
            ]
        });
    }

    async handle({ args, client, msg }, responder) {
        if (msg.author.id !== process.env.OWNER_ID) {
            return;
        }

        let suffix, evaled;

        const cleanCodeBlock = (string) => {
            return string.replace(/^```.* ?/, '').replace(/```$/, '');
        };

        try {
            suffix = cleanCodeBlock(args.eval);
            evaled = eval(suffix);
        } catch (err) {
            return responder.send(
                '__**Input:**__\n```js\n' + evaled + '```\n' +
                '__**Error:**__\n```diff\n- ' + err + '```'
            );
        }

        if (typeof evaled === 'object') {
            evaled = JSON.stringify(evaled);
        }

        return responder.send(
            '__**Input:**__\n```js\n' + suffix + '```\n' +
            '__**Result:**__\n```' + evaled + '```'
        );
    }
}

module.exports = Eval;
