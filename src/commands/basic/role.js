const { Command } = require('sylphy');

class Role extends Command {
    constructor (...args) {
        super(...args, {
            name: 'role',
            group: 'basic',
            cooldown: 1,
            options: { guildOnly: true },
            usage: [
                { name: 'options', displayName: 'options', type: 'string', optional: true, last: false },
                { name: 'roleName', displayName: 'roleName', type: 'string', optional: true, last: true }
            ]
        });
    }

    handle ({ args, client, msg }, responder) {
        const options = args.options;
        const roleName = args.roleName;

        if (!options) {
            return responder.send(`${msg.author.mention} please specify **add**, **remove** or **list** before the role name :rage:`)
            .catch(this.logger.error);
        } else if ((options === 'add' || options === 'remove') && (!roleName)) {
            return responder.send(`${msg.author.mention} please specify a role name :rage:`).catch(this.logger.error);
        }

        if (options === 'list') {
            return responder.send(' ', { embed: {
                color: 0x98ffa6,
                title: 'Server Role List',
                description: 'roles above satomi\'s role are not addable/removeable',
                fields: [{
                    name: 'List',
                    value: `${(msg.channel.guild.roles.map(r => r.name)).join('\n')}`
                }],
                timestamp: new Date()
            } }).catch(this.logger.error);
        }

        if (options === 'add') {
            try {
                client.addGuildMemberRole(msg.channel.guild.id, msg.author.id, msg.channel.guild.roles.find(r => r.name === `${roleName}`).id)
                .then(() => {
                    return responder.send(' ', { embed: {
                        color: 0x98ffa6,
                        title: 'Role Add Success!',
                        description: `The role ${roleName} has been added to you :3`
                    } }).catch(this.logger.error);
                }).catch(this.logger.error);
            } catch (error) {
                return responder.send('uhh something went wrong >.>', { embed: {
                    color: 0xff4b4b,
                    description: `${error}`
                } }).catch(this.logger.error);
            }
        } else if (options === 'remove') {
            try {
                client.removeGuildMemberRole(msg.channel.guild.id, msg.author.id, msg.channel.guild.roles.find(r => r.name === `${roleName}`).id)
                .then(() => {
                    return responder.send(' ', { embed: {
                        color: 0x98ffa6,
                        title: 'Role Remove Success!',
                        description: `The role ${roleName} has been removed from you :3`
                    } }).catch(this.logger.error);
                }).catch(this.logger.error);
            } catch (error) {
                return responder.send('uhh something went wrong >.>', { embed: {
                    color: 0xff4b4b,
                    description: `${error}`
                } }).catch(this.logger.error);
            }
        }
    }
}

module.exports = Role;
