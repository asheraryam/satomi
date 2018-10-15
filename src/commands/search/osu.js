const { Command } = require('sylphy');
const snekfetch = require('snekfetch');

class Osu extends Command {
    constructor(...args) {
        super (...args, {
            name: 'osu',
            group: 'search',
            cooldown: 5,
            options: { guildOnly: true },
            usage: [
                { name: 'gameType', displayName: 'gameType', type: 'string', optional: true },
                { name: 'player', displayName: 'player', type: 'string', optional: false, last: true }
            ]
        });
    }

    async handle ({ args, client, msg }, responder) {

        if ( !(args.gameType === 'osu' || args.gameType === 'taiko' || args.gameType === 'ctb' || args.gameType === 'mania') ) {
            return responder.send(`${msg.author.mention} :anger: osu! game types are: osu | taiko | ctb (control the beat) | mania` +
        '\n example use: `s.osu osu cookiezi`');
        }

        if (args.gameType === 'osu') {
            args.gameType.replace('osu', '0');
        } else if (args.gameType === 'taiko') {
            args.gameType.replace('taiko', '1');
        } else if (args.gameType === 'ctb') {
            args.gameType.replace('ctb', '2');
        } else if (args.gameType === 'mania') {
            args.gameType.replace('mania', '3');
        }

        const gameType = args.gameType;
        const player = args.player;

        const data = await snekfetch.get( `http://lemmmy.pw/osusig/sig.php?colour=pink&uname=${player}&mode=${gameType}&pp=1&removeavmargin&flagshadow&flagstroke&darktriangles&onlineindicator=undefined&xpbar`);

        return client.createMessage(msg.channel.id, ' ', {
            file: data.body,
            name: `osusig-${player}.png`
        }).catch(this.logger.error);
    }
}

module.exports = Osu;
