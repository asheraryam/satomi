const { Command } = require('sylphy');
const axios = require('axios');

class Gelbooru extends Command {
    constructor(...args) {
        super(...args, {
            name: 'gelbooru',
            group: 'nsfw',
            cooldown: 2,
            options: { guildOnly: true },
            usage: [
                { name: 'tags', displayName: 'tags', type: 'string', optional: true, last: true }
            ]
        });
    }

    async handle ({ args, client, msg }, responder) {
        const tags = args.tags;
        const randomInt = Math.floor(Math.random() * 100);
        const blacklist = ['loli', 'shota', 'cub', 'young', 'child', 'baby', 'guro', 'gore', 'vore'];

        if (tags.length !== 0) {
            if (blacklist.includes(tags.toLowerCase())) {
                return responder.error(`${msg.author.mention} Blacklisted word found`);
            }
        }

        if (msg.channel.nsfw === false) {
            return;
        }

        client.sendChannelTyping(msg.channel.id);

        const res = await axios.get(`https://gelbooru.com/index.php?page=dapi&s=post&q=index&tags=${tags}&limit=100&json=1`, {
            headers: {
                'User-Agent': client.userAgent
            }
        }).catch(this.logger.error);

        return responder.send(' ', { embed: {
            color: client.nsfwColor,
            description: `[Source](${res.data[randomInt].file_url})`,
            image: {
                url: res.data[randomInt].file_url
            },
            timestamp: new Date()
        } }).catch(this.logger.error);
    }
}

module.exports = Gelbooru;
