const { Command } = require('sylphy');
const axios = require('axios');
const nsfwBlocks = require('../../utils/nsfwBlocks.js');

class Danbooru extends Command {
    constructor(...args) {
        super(...args, {
            name: 'danbooru',
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

        if (tags === nsfwBlocks.nsfwBlockList.tag) {
            return;
        }

        if (msg.channel.nsfw === false) {
            return;
        }

        client.sendChannelTyping(msg.channel.id);

        const res = await axios.get(`https://danbooru.donmai.us/posts.json?tags=${tags}&limit=200`, {
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

module.exports = Danbooru;
