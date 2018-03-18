const { Command } = require('sylphy');

class RateWaifu extends Command {
    constructor (...args) {
        super(...args, {
            name: 'ratewaifu',
            group: 'fun',
            cooldown: 2,
            options: { guildOnly: true },
            usage: [
                { name: 'waifu', displayName: 'waifu', type: 'member', optional: true, last: true }
            ]
        });
    }

    handle ({ msg }, responder) {
        const waifu = msg.channel.guild.members.get(msg.mentions[0].id);
        const number = (Math.random() * 10).toPrecision(2);

        if (msg.mentions.length === 0) {
            return responder.send(`${msg.author.mention}, Please mention a user to rate~! owo`);
        }

        return responder.send(`${msg.author.mention}, I rate your waifu ${waifu.mention}, ${number}/10 owo`).catch(this.logger.error);
    }
}

module.exports = RateWaifu;
