const { Command } = require('sylphy');
const chalk = require('chalk');

class LeaveServer extends Command {
    constructor (...args) {
        super(...args, {
            name: 'leaveserver',
            group: 'owner',
            aliases: ['leave'],
            cooldown: 0,
            options: { guildOnly: true },
            usage: [
                { name: 'serverid', displayName: 'serverid', type: 'string', optional: true, last: true }
            ]
        });
    }

    async handle ({ args, client, msg }, responder) {
        if (msg.author.id !== process.env.OWNER_ID) {
            return;
        }

        let serverid = args.serverid;

        if (!serverid) {
            serverid = msg.channel.guild.id;
        }

        const serverName = client.guilds.get(g => g.id === serverid).name;

        const leave = await responder.dialog([{
            prompt: `Are you sure you want me to leave **${serverName}** \`yes\` or \`no\``,
            input: { name: 'choice', type: 'string', choices: ['yes', 'no'] }
        }]);

        if (leave.choice === 'yes') {
            try {
                client.leaveGuild(serverid);
                this.logger.info(chalk.cyan(`[CLIENT] Satomi has left ${serverName}`));
                return responder.send(' ', { embed: {
                    color: client.satomiColor,
                    title: `Satomi has left ${serverName}`
                } });
            } catch (error) {
                this.logger.error;
                return responder.send(' ', { embed: {
                    color: client.redColor,
                    title: 'Leave Server Error',
                    description: `${error}`,
                    timestamp: new Date()
                } });
            }
        } else {
            return responder.send(`Ok, I will not leave **${serverName}**~ :dango:`);
        }
    }
}

module.exports = LeaveServer;
