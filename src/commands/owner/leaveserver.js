const { Command } = require('sylphy');
//const masterkeys = require('../../../masterkeys.json');

class LeaveServer extends Command {
    constructor(...args) {
        super(...args, {
            name: 'leaveserver',
            group: 'owner',
            cooldown: 0,
            options: { guildOnly: true },
            usage: [
                { name: 'server', displayName: 'server', type: 'string', optional: false, last: true }
            ]
        });
    }

    handle ({ args, client, msg }, responder) {
        if (msg.author.id !== process.env.OWNER) {
            return;
        }

        const server = args.server;

        return client.guilds.get(server).leave.then(() => {
            return responder.send(' ', { embed: {
                color: 0xffd7ee,
                title: `I have successfully left ${server}!`
            }});
        }).catch(this.logger.error).then((error) => {
            return responder.send(' ', { embed: {
                color: 0xff4b4b,
                title: `Error leaving ${server}`,
                description: `${error}`
            }});
        });
    }
}

module.exports = LeaveServer;
