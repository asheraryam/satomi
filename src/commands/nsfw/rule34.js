const { Command } = require('sylphy');
const axios = require('axios');
const nsfwBlocks = require('../../utils/nsfwBlocks.js');

class Rule34 extends Command {
    constructor(...args) {
        super(...args, {
            name: 'rule34',
            group: 'nsfw',
            aliases: ['r34'],
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

        const res = await axios.get(`http://rule34.xxx/index.php?page=dapi&s=post&q=index&tags=${tags}&limit=100&json=1`, {
            headers: {
                'User-Agent': client.userAgent
            }
        }).catch(this.logger.error);

        return responder.send(' ', { embed: {
            color: client.nsfwColor,
            description: `[Source](${res.data[randomInt].file_url})`,
            image: {
                url: `https://us.rule34.xxx/images/${res.data[randomInt].directory}/${res.data[randomInt].image}`
            },
            timestamp: new Date()
        } }).catch(this.logger.error);
    }
}

module.exports = Rule34;
