const { Command } = require('sylphy');
const request = require('request');
//const masterkeys = require('../../../masterkeys.json');

class SetAvatar extends Command {
    constructor(...args) {
        super(...args, {
            name: 'setavatar',
            group: 'owner',
            cooldown: 0,
            options: { guildOnly: true },
            usage: [
                { name: 'url', displayName: 'url', type: 'string', optional: true, last: true }
            ]
        });
    }

    handle ({ args, client, msg }, responder) {
        if (msg.author.id !== process.env.OWNER) {
            return;
        }

        var url = args.url;

        if (msg.attachments[0]) {
            url = msg.attachments[0].url;
        }

        request.get({ url: url, method: 'GET', encoding: null }, (err, res, body) => {
			if (err) {
                return responder.send('Error while retrieving avatar: ', { embed: {
                    title: 'SetAvatar Error',
                    color: 0xff4b4b,
                    description: err
                }});
            } else if (res.statusCode !== 200) {
                return responder.send(`Hmm, I got a non-200 response (${res.statusCode} ${res.statusMessage}) while getting the avatar >.<`);
            }

			client.editSelf({
				avatar: `data:${res.headers['content-type']};base64,${body.toString('base64')}`
			}).then(() => {
				return responder.send(msg.author.mention + ' I changed my picture~ How do you like it master?');
			}).catch(() => {
                this.logger.error;

				return responder.send('There was an error changing my new avatar');
			});
		});
    }
}

module.exports = SetAvatar;