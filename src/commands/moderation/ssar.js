const { Command } = require('sylphy');

class Ssar extends Command {
    constructor(...args) {
        super(...args, {
            name: 'ssar',
            group: 'moderation',
            cooldown: 2,
            options: { guildOnly: true, requirements: { permissions: { administrator: true } } },
            usage: [
                { name: 'options', displayName: 'options', type: 'string', optional: false, last: false },
                { name: 'roleName', displayName: 'roleName', type: 'string', optional: true, last: true }
            ]
        });
    }

    handle ({ args, client, msg }, responder) {
        const options = args.options;
        const roleName = args.roleName;

        const getRoleID = () => msg.channel.guild.roles.find(r => r.name === `${roleName}`).id;

        const roleID = getRoleID();

        if (options === 'add') {
            client.mongodb.models.roles.create({ serverID: msg.channel.guild.id, roleID: roleID, roleName: roleName }, (error, add) => {
                if (error) {
                    return responder.send(`${msg.author.mention} could not add role **${roleName}** to the database`, { embed: {
                        color: client.redColor,
                        title: 'Ssar.Add Error',
                        description: `${error}`,
                        timestamp: new Date()
                    }}).catch(this.logger.error);
                } else {
                    return responder.send(`${msg.author.mention} successfully added role **${roleName}** to the database!`, { embed: {
                        color: client.satomiColor,
                        title: 'Role Info',
                        description: 'useful info below',
                        fields: [{
                            name: '---------',
                            value: `Role: ${roleName}` +
                            `\nServer: ${msg.channel.guild.name} (${msg.channel.guild.id})` +
                            `\nRole ID: ${roleID}`
                        }],
                        timestamp: new Date()
                    }}).catch(this.logger.error);
                }
            });
        }

        if (options === 'remove') {
            client.mongodb.models.roles.findOneAndDelete({ serverID: msg.channel.guild.id, roleID: roleID, roleName: roleName }, (error, remove) => {
                if (error) {
                    return responder.send(`${msg.author.mention} could not remove role **${roleName}** to the database`, { embed: {
                        color: client.redColor,
                        title: 'Ssar.Remove Error',
                        description: `${error}`,
                        timestamp: new Date()
                    }}).catch(this.logger.error);
                } else {
                    return responder.send(`${msg.author.mention} successfully removed role **${roleName}** to the database!`, { embed: {
                        color: client.redColor,
                        title: 'Removed Role Info',
                        description: 'useful info below',
                        fields: [{
                            name: '---------',
                            value: `Role: ${roleName}` +
                            `\nServer: ${msg.channel.guild.name} (${msg.channel.guild.id})` +
                            `\nRole ID: ${roleID}`
                        }],
                        timestamp: new Date()
                    }}).catch(this.logger.error);
                }
            });
        }
    }
}

module.exports = Ssar;
