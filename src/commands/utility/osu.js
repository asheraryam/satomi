const { Command } = require('sylphy');
const snekfetch = require('snekfetch');

class Osu extends Command {
    constructor(...args) {
        super (...args, {
            name: 'osu',
            group: 'utility',
            cooldown: 0,
            options: {guildsOnly: true},
            usage: [
                { name: 'gameType', displayName: 'gameType', type: 'string', optional: true },
                { name: 'player', displayName: 'player', type: 'string', optional: false, last: true }
            ]
        })
    }

    async handle ({ args, client, msg }, responder) {

        if ( !(args.gameType == '0' || args.gameType == '1' || args.gameType == '2' || args.gameType == '3') ) {
            return responder.send(`${msg.author.mention} :anger: osu! game types are: osu! standard = 0 | taiko = 1 | control the beat = 2 | mania = 3` +
        '\n example use: `s.osu 0 cookiezi`');
        }

        const gameType = '&mode=' + args.gameType
        const player = args.player

        const data = await snekfetch.get(`http://lemmmy.pw/osusig/sig.php?colour=pink&uname=${player}${gameType}&pp=1&removeavmargin&flagstroke&onlineindicator=undefined&xpbar`);

        return client.createMessage(msg.channel.id, ' ', {
            file: data.body,
            name: `osusig-${player}.png`
        })
        .catch(error => {
                this.logger.error
        });
    }
}

module.exports = Osu;