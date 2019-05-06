const { Command } = require('sylphy');

class SetBio extends Command {
    constructor (...args) {
        super(...args, {
            name: 'setbio',
            group: 'basic',
            cooldown: 10,
            options: { guildOnly: true },
            usage: [
                { name: 'biotext', displayName: 'biotext', type: 'string', optional: true, last: true }
            ]
        });
    }

    handle ({ args, client, msg }, responder) {
        const member = msg.author.id;
        const biotext = args.biotext;

        if (biotext === '-reset') {
            client.mongodb.models.users.findOneAndUpdate({ serverID: msg.channel.guild.id, userID: member }, { $set: { description: 'Welcome to my profile' } }, (error, u) => {
                if (error) {
                    return responder.send(`${msg.author.mention} couldn't find Guild or User`, { embed: {
                        color: client.redColor,
                        title: 'SetBio.Find Error',
                        description: `${error}`,
                        timestamp: new Date()
                    } }).catch(this.logger.error);
                }

                return responder.send(' ', { embed: {
                    color: client.satomiColor,
                    title: 'SetBio.Reset',
                    description: 'Your bio was set to the default',
                    timestamp: new Date()
                } }).catch(this.logger.error);
            }).catch(this.logger.error);
        }

        if (biotext !== '-reset') {
            client.mongodb.models.users.findOneAndUpdate({ serverID: msg.channel.guild.id, userID: member }, { $set: { description: biotext } }, (error, u) => {
                if (error) {
                    return responder.send(`${msg.author.mention} couldn't find Guild or User`, { embed: {
                        color: client.redColor,
                        title: 'SetBio.Find Error',
                        description: `${error}`,
                        timestamp: new Date()
                    } }).catch(this.logger.error);
                }
    
                return responder.send(' ', { embed: {
                    color: client.satomiColor,
                    title: 'SetBio.Success',
                    description: `Your bio was set to **${biotext}**`,
                    timestamp: new Date()
                } }).catch(this.logger.error);
            }).catch(this.logger.error);
        }
    }
}

module.exports = SetBio;
