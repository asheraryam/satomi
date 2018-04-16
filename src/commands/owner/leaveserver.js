const { Command } = require('sylphy');

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
        if (msg.author.id !== process.env.OWNER_ID) {
            return;
        }

        const server = args.server;

        return client.guilds.get(server).leave.then(() => {
            return responder.send(' ', { embed: {
                color: 0x3b6784,
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
