const { Command } = require('sylphy');
const answers8ball = require('../../assets/answers8ball.js');

class Eightball extends Command {
    constructor (...args) {
        super (...args, {
            name: '8ball',
            group: 'fun',
            cooldown: 0,
            options: { guildsOnly: true },
            usage: [
                { name: 'question', displayName: 'question', type: 'string', optional: false, last: true}
            ]
        })
    }

    handle ({ args, client, msg }, responder) {
        const question = args.question;
        const answer = answers8ball.magicList[~~(Math.random() * answers8ball.magicList.length)];

        return responder.send(' ', {embed: {
            color: 0xea9a94,
            title: ':question: Your Question: ' + question,
            description: ':8ball: Answer: ' + answer.name,
            timestamp: new Date()
        }}).catch(this.logger.error);
    }
}

module.exports = Eightball;