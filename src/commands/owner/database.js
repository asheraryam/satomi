const { Command } = require('sylphy');

class Database extends Command {
    constructor(...args) {
        super(...args, {
            name: 'database',
            group: 'owner',
            cooldown: 2,
            options: { guildOnly: true },
            usage: [
                { name: 'options', displayName: 'options', type: 'string', optional: true, last: true }
            ]
        });
    }

    handle ({ args, client, msg }, responder) {
        if (msg.author.id !== process.env.OWNER_ID) {
            return;
        }

        const options = args.options;

        if (options === 'reconnect') {
            try {
                client.mongodb.load(client);
                return responder.send(' ', { embed: {
                    color: client.satomiColor,
                    title: 'Successfully Reconnected',
                    description: 'Satomi has reconnected to MongoDB',
                    timestamp: new Date()
                } });
            } catch (error) {
                this.logger.error;
                return responder.send(' ', { embed: {
                    color: client.redColor,
                    title: 'Couldnt Reconnect',
                    description: 'Satomi could not reconnect to MongoDB',
                    timestamp: new Date()
                } });
            }
        } else if (options === 'disconnect') {
            try {
                client.mongodb.destroy();
                return responder.send(' ', { embed: {
                    color: client.satomiColor,
                    title: 'Successfully Disconnected',
                    description: 'Satomi has disconnected from MongoDB',
                    timestamp: new Date()
                } });
            } catch (error) {
                this.logger.error;
                return responder.send(' ', { embed: {
                    color: client.redColor,
                    title: 'Couldnt Disconnect',
                    description: 'Satomi could not disconnect from MongoDB',
                    timestamp: new Date()
                } });
            }
        }
    }
}

module.exports = Database;
