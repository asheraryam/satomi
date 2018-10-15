const { Command } = require('sylphy');
const answers8ball = require('../../utils/lists/answers8ball.js');

class Eightball extends Command {
    constructor (...args) {
        super (...args, {
            name: '8ball',
            group: 'fun',
            cooldown: 3,
            options: { guildOnly: true },
            usage: [
                { name: 'question', displayName: 'question', type: 'string', optional: false, last: true }
            ]
        });
    }

    handle ({ args, client }, responder) {
        const question = args.question;
        const answer = answers8ball.magicList[~~(Math.random() * answers8ball.magicList.length)];

        return responder.send(' ', { embed: {
            color: client.satomiColor,
            title: `:question: Your Question: ${question}`,
            description: `:8ball: Answer: ${answer.name}`,
            timestamp: new Date()
        } }).catch(this.logger.error);
    }
}

module.exports = Eightball;
