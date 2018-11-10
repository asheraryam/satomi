const { Command } = require('sylphy');

class Coinflip extends Command {
    constructor (...args) {
        super(...args, {
            name: 'coinflip',
            group: 'fun',
            aliases: ['coin', 'flip'],
            cooldown: 2,
            options: { guildOnly: true }
        });
    }

    handle ({ client, msg }, responder) {
        const coins = [
            { name: 'heads!' },
            { name: 'tails!' }
        ];

        const coin = coins[~~(Math.random() * coins.length)];

        if (coin.name === 'heads!') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: `${msg.author.username} flipped a coin!`,
                description: `and it landed on... ${coin.name}`,
                image: {
                    url: 'https://my.mixtape.moe/aqpabj.png'
                },
                timestamp: new Date()
            } }).catch(this.logger.error);
        } else if (coin.name === 'tails!') {
            return responder.send(' ', { embed: {
                color: client.satomiColor,
                title: `${msg.author.username} flipped a coin!`,
                description: `and it landed on... ${coin.name}`,
                image: {
                    url: 'https://my.mixtape.moe/fahgte.png'
                },
                timestamp: new Date()
            } }).catch(this.logger.error);
        }
    }
}

module.exports = Coinflip;
