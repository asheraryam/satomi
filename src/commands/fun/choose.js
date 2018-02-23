const { Command } = require('sylphy');

class Choose extends Command {
    constructor(...args) {
        super(...args, {
            name: 'choose',
            group: 'fun',
            cooldown: 5,
            options: { guildOnly: true },
            usage: [
                { name: 'question', displayName: 'question', type: 'string', optional: false, last: true }
            ]
        });
    }

    handle ({ args }, responder) {
        const question = args.question;

        let bothQs = question.split(', ');

        for (let i = 0; i < bothQs.length; i++) {
            bothQs[i] = bothQs[i].trim();
        }

        const answer = bothQs[~~(Math.random() * bothQs.length)];

        return responder.send(' ', { embed: {
            color: 0xffd7ee,
            title: ':question: Your Question: ' + question.replace(', ', ' or '),
            description: 'I choose... ' + answer + ' :sunglasses:',
            timestamp: new Date()
        }}).catch(this.logger.error);
    }
}

module.exports = Choose;
