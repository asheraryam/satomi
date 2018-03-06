const { Command } = require('sylphy');
const axios = require('axios');

class Catgirl extends Command {
    constructor(...args) {
        super(...args, {
            name: 'catgirl',
            group: 'search',
            cooldown: 5,
            options: { guildOnly: true },
            usage: [
                { name: 'options', displayName: 'options', type: 'string', optional: true, last: true }
            ]
        });
    }

    async handle ({ args, msg }, responder) {
        const options = args.options;
        const userAgent = 'Satomi - (https://github.com/envyist/satomi)';

        const sites = ['nekos.brussell', 'nekos.life'];
        const site = sites[Math.floor(Math.random() * sites.length)];

        if (options === 'sfw' || !options) {
            if (site === 'nekos.brussell') {
                const res = await axios.get('https://nekos.brussell.me/api/v1/random/image?count=1&nsfw=false', {
                    headers: {
                        'User-Agent': userAgent
                    }
                }).catch(this.logger.error);

                return responder.send(' ', {embed: {
                    color: 0xffd7ee,
                    description: `[Source](https://nekos.brussell.me/image/${res.data.images[0].id})`,
                    image: {
                        url: `https://nekos.brussell.me/image/${res.data.images[0].id}`
                    },
                    timestamp: new Date()
                }}).catch(this.logger.error);
            } else if (site === 'nekos.life') {
                const res = await axios.get('https://nekos.life/api/v2/img/neko', {
                    headers: {
                        'User-Agent': userAgent
                    }
                }).catch(this.logger.error);

                return responder.send(' ', {embed: {
                    color: 0xffd7ee,
                    description: `[Source](${res.data.url})`,
                    image: {
                        url: res.data.url
                    },
                    timestamp: new Date()
                }}).catch(this.logger.error);
            }
        } else if (options === 'nsfw') {
            if (msg.channel.nsfw === false) {
                return responder.send('Please ask an admin to enable nsfw in this channel (s.setnsfw on)')
                .catch(this.logger.error);
            }

            if (site === 'nekos.brussell') {
                const res = await axios.get('https://nekos.brussell.me/api/v1/random/image?count=1&nsfw=true', {
                    headers: {
                        'User-Agent': userAgent
                    }
                }).catch(this.logger.error);

                return responder.send(' ', {embed: {
                    color: 0xffd7ee,
                    description: `[Source](https://nekos.brussell.me/image/${res.data.images[0].id})`,
                    image: {
                        url: `https://nekos.brussell.me/image/${res.data.images[0].id}`
                    },
                    timestamp: new Date()
                }}).catch(this.logger.error);
            } else if (site === 'nekos.life') {
                const res = await axios.get('https://nekos.life/api/v2/img/lewd', {
                    headers: {
                        'User-Agent': userAgent
                    }
                }).catch(this.logger.error);

                return responder.send(' ', {embed: {
                    color: 0xffd7ee,
                    description: `[Source](${res.data.url})`,
                    image: {
                        url: res.data.url
                    },
                    timestamp: new Date()
                }}).catch(this.logger.error);
            }
        }
    }
}

module.exports = Catgirl;

