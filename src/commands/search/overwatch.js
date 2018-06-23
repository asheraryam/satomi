/* eslint quotes: 0 */

const { Command } = require('sylphy');
const owjs = require('overwatch-js');

class Overwatch extends Command {
    constructor(...args) {
        super(...args, {
            name: 'overwatch',
            group: 'search',
            aliases: ['ow'],
            cooldown: 5,
            options: { guildOnly: true },
            usage: [
                { name: 'type', displayName: 'type', type: 'string', optional: false },
                { name: 'platform', displayName: 'platform', type: 'string', optional: false },
                { name: 'region', displayName: 'region', type: 'string', optional: false },
                { name: 'player', displayName: 'player', type: 'string', optional: false, last: true }
            ]
        });
    }

    handle ({ args, client }, responder) {
        const type = args.type; // profile, competitive, quickplay
        const platform = args.platform; // pc, xbl, psn
        const region = args.region; // na, eu, kr, cn
        const player = args.player.replace('#', '-'); // case sensitive

        if (type === 'profile' || type === 'pf' || type === 'p') {
            owjs.getOverall(platform, region, player).then((data) => {
                return responder.send(' ', {embed: {
                    color: client.owColor,
                    title: `Overwatch Profile Info for: ${player}`,
                    url: `${!data.profile.url ? `` : ''}${data.profile.url ? data.profile.url : ''}`,
                    thumbnail: {
                        url: `${!data.profile.avatar ? `` : ''}${data.profile.avatar ? data.profile.avatar : ''}`
                    },
                    fields: [{
                        name: 'Nickname',
                        value: `${!data.profile.nick ? `none` : ''}${data.profile.nick ? data.profile.nick : ''}` +
                        `\nPlatform: ${platform.toUpperCase()}`,
                        inline: true
                    },
                    {
                        name: 'Player Level',
                        value: `Level: ${!data.profile.level ? `none` : ''}${data.profile.level ? data.profile.level : ''}` +
                        `\nTier: ${!data.profile.tier ? `0` : ''}${data.profile.tier ? data.profile.tier : ''}`,
                        inline: true
                    },
                    {
                        name: 'Rank',
                        value: `Region: #${!data.profile.rank ? `none` : ''}${data.profile.rank ? data.profile.rank : ''}` +
                        `\nDivision: ${!data.profile.ranking ? `none` : ''}${data.profile.ranking ? data.profile.ranking : ''}`,
                        inline: true
                    },
                    {
                        name: 'Season Stats',
                        value: `Season: ${!data.profile.season.id ? `none` : ''}${data.profile.season.id ? data.profile.season.id : ''}` +
                        `\nRank: ${!data.profile.season.rank ? `none` : ''}${data.profile.season.rank ? data.profile.season.rank : ''}`,
                        inline: true
                    }],
                    timestamp: new Date()
                }}).catch(this.logger.error);
            }).catch((err) => {
                if (err.message && err.message.includes('PROFILE_NOT_FOUND')) {
                    return responder.error('Profile not found please check your input (player names are case sensitive!)')
                    .catch(this.logger.error);
                }
            });
        } else if (type === 'competitive' || type === 'comp' || type === 'c') {
            owjs.getOverall(platform, region, player).then((data) => {
                return responder.send(' ', {embed: {
                    color: client.owColor,
                    title: `Competitive Overwatch Info for ${player}`,
                    url: `${!data.profile.url ? `` : ''}${data.profile.url ? data.profile.url : ''}`,
                    thumbnail: {
                        url: `${!data.profile.avatar ? `` : ''}${data.profile.avatar ? data.profile.avatar : ''}`
                    },
                    fields: [{
                        name: 'General Competitive Stats',
                        value: `Games Played: ${!data.competitive.global.games_played ? `0` : ''}${data.competitive.global.games_played ? data.competitive.global.games_played : ''}` +
                        `\nGames Won: ${!data.competitive.global.games_won ? `0` : ''}${data.competitive.global.games_won ? data.competitive.global.games_won : ''}` +
                        `\nGames Lost: ${!data.competitive.global.games_lost ? `0` : ''}${data.competitive.global.games_lost ? data.competitive.global.games_lost : ''}` +
                        `\nGames Tied: ${!data.competitive.global.games_tied ? `0` : ''}${data.competitive.global.games_tied ? data.competitive.global.games_tied : ''}` +
                        `\nMedals Total: ${!data.competitive.global.medals ? `0` : ''}${data.competitive.global.medals ? data.competitive.global.medals : ''}` +
                        `\nGold Medals: ${!data.competitive.global.medals_gold ? `0` : ''}${data.competitive.global.medals_gold ? data.competitive.global.medals_gold : ''}` +
                        `\nSilver Medals: ${!data.competitive.global.medals_silver ? `0` : ''}${data.competitive.global.medals_silver ? data.competitive.global.medals_silver : ''}` +
                        `\nBronze Medals: ${!data.competitive.global.medals_bronze ? `0` : ''}${data.competitive.global.medals_bronze ? data.competitive.global.medals_bronze : ''}`,
                        inline: true
                    },
                    {
                        name: 'All Time Totals',
                        value: `Eliminations: ${!data.competitive.global.eliminations ? `0` : ''}${data.competitive.global.eliminations ? data.competitive.global.eliminations : ''}` +
                        `\nDamage Done: ${!data.competitive.global.damage_done ? `0` : ''}${data.competitive.global.damage_done ? data.competitive.global.damage_done : ''}` +
                        `\nDeaths: ${!data.competitive.global.deaths ? `0` : ''}${data.competitive.global.deaths ? data.competitive.global.deaths : ''}` +
                        `\nFinal Blows: ${!data.competitive.global.final_blows ? `0` : ''}${data.competitive.global.final_blows ? data.competitive.global.final_blows : ''}` +
                        `\nHealing Done: ${!data.competitive.global.healing_done ? `0` : ''}${data.competitive.global.healing_done ? data.competitive.global.healing_done : ''}` +
                        `\nObjective Kills: ${!data.competitive.global.objective_kills ? `0` : ''}${data.competitive.global.objective_kills ? data.competitive.global.objective_kills : ''}` +
                        `\nObjective Time: ${!data.competitive.global.objective_time ? `0` : ''}${data.competitive.global.objective_time ? data.competitive.global.objective_time : ''}` +
                        `\nSolo Kills: ${!data.competitive.global.solo_kills ? `0` : ''}${data.competitive.global.solo_kills ? data.competitive.global.solo_kills : ''}` +
                        `\nMulti Kills: ${!data.competitive.global.multikills ? `0` : ''}${data.competitive.global.multikills ? data.competitive.global.multikills : ''}` +
                        `\nTime on Fire: ${!data.competitive.global.time_spent_on_fire ? `0` : ''}${data.competitive.global.time_spent_on_fire ? data.competitive.global.time_spent_on_fire : ''}`,
                        inline: true
                    },
                    {
                        name: 'Averages',
                        value: `Eliminations: ${!data.competitive.global.eliminations_average ? `0` : ''}${data.competitive.global.eliminations_average ? data.competitive.global.eliminations_average : ''}` +
                        `\nDamage Done: ${!data.competitive.global.damage_done_average ? `0` : ''}${data.competitive.global.damage_done_average ? data.competitive.global.damage_done_average : ''}` +
                        `\nDeaths: ${!data.competitive.global.deaths_average ? `0` : ''}${data.competitive.global.deaths_average ? data.competitive.global.deaths_average : ''}` +
                        `\nFinal Blows: ${!data.competitive.global.final_blows_average ? `0` : ''}${data.competitive.global.final_blows_average ? data.competitive.global.final_blows_average : ''}` +
                        `\nHealing Done: ${!data.competitive.global.healing_done_average ? `0` : ''}${data.competitive.global.healing_done_average ? data.competitive.global.healing_done_average : ''}` +
                        `\nObjective Kills: ${!data.competitive.global.objective_kills_average ? `0` : ''}${data.competitive.global.objective_kills_average ? data.competitive.global.objective_kills_average : ''}` +
                        `\nObjective Time: ${!data.competitive.global.objective_time_average ? `0` : ''}${data.competitive.global.objective_time_average ? data.competitive.global.objective_time_average : ''}`+
                        `\nSolo Kills: ${!data.competitive.global.solo_kills_average ? `0` : ''}${data.competitive.global.solo_kills_average ? data.competitive.global.solo_kills_average : ''}` +
                        `\nTime on Fire: ${!data.competitive.global.time_spent_on_fire_average ? `0` : ''}${data.competitive.global.time_spent_on_fire_average ? data.competitive.global.time_spent_on_fire_average : ''}`,
                        inline: true
                    },
                    {
                        name: 'Most In Game',
                        value: `Eliminations: ${!data.competitive.global.eliminations_most_in_game ? `0` : ''}${data.competitive.global.eliminations_most_in_game ? data.competitive.global.eliminations_most_in_game : ''}` +
                        `\nDamage Done: ${!data.competitive.global.damage_done_most_in_game ? `0` : ''}${data.competitive.global.damage_done_most_in_game ? data.competitive.global.damage_done_most_in_game : ''}` +
                        `\nFinal Blows: ${!data.competitive.global.final_blows_most_in_game ? `0` : ''}${data.competitive.global.final_blows_most_in_game ? data.competitive.global.final_blows_most_in_game : ''}` +
                        `\nHealing Done: ${!data.competitive.global.healing_done_most_in_game ? `0` : ''}${data.competitive.global.healing_done_most_in_game ? data.competitive.global.healing_done_most_in_game : ''}` +
                        `\nObjective Kills: ${!data.competitive.global.objective_kills_most_in_game ? `0` : ''}${data.competitive.global.objective_kills_most_in_game ? data.competitive.global.objective_kills_most_in_game : ''}` +
                        `\nObjective Time: ${!data.competitive.global.objective_time_most_in_game ? `0` : ''}${data.competitive.global.objective_time_most_in_game ? data.competitive.global.objective_time_most_in_game : ''}`+
                        `\nSolo Kills: ${!data.competitive.global.solo_kills_most_in_game ? `0` : ''}${data.competitive.global.solo_kills_most_in_game ? data.competitive.global.solo_kills_most_in_game : ''}` +
                        `\nMulti Kills: ${!data.competitive.global.multikills_best ? `0` : ''}${data.competitive.global.multikills_best ? data.competitive.global.multikills_best : ''}` +
                        `\nTime on Fire: ${!data.competitive.global.time_spent_on_fire_most_in_game ? `0` : ''}${data.competitive.global.time_spent_on_fire_most_in_game ? data.competitive.global.time_spent_on_fire_most_in_game : ''}`,
                        inline: true
                    }],
                    timestamp: new Date()
                }}).catch(this.logger.error);
            }).catch((err) => {
                if (err.message && err.message.includes('PROFILE_NOT_FOUND')) {
                    return responder.error('Profile not found please check your input (player names are case sensitive!)')
                    .catch(this.logger.error);
                }
            });
        } else if (type === 'quickplay' || type === 'quick' || type === 'q') {
            owjs.getOverall(platform, region, player).then((data) => {
                return responder.send(' ', {embed: {
                    color: client.owColor,
                    title: `Overwatch Quickplay Info for ${player}`,
                    url: `${!data.profile.url ? `` : ''}${data.profile.url ? data.profile.url : ''}`,
                    thumbnail: {
                        url: `${!data.profile.avatar ? `` : ''}${data.profile.avatar ? data.profile.avatar : ''}`
                    },
                    fields: [{
                        name: 'General Quickplay Stats',
                        value: `Games Played: ${!data.quickplay.global.games_played ? `0` : ''}${data.quickplay.global.games_played ? data.quickplay.global.games_played : ''}` +
                        `\nGames Won: ${!data.quickplay.global.games_won ? `0` : ''}${data.quickplay.global.games_won ? data.quickplay.global.games_won : ''}` +
                        `\nGames Lost: ${!data.quickplay.global.games_lost ? `0` : ''}${data.quickplay.global.games_lost ? data.quickplay.global.games_lost : ''}` +
                        `\nGames Tied: ${!data.quickplay.global.games_tied ? `0` : ''}${data.quickplay.global.games_tied ? data.quickplay.global.games_tied : ''}` +
                        `\nMedals Total: ${!data.quickplay.global.medals ? `0` : ''}${data.quickplay.global.medals ? data.quickplay.global.medals : ''}` +
                        `\nGold Medals: ${!data.quickplay.global.medals_gold ? `0` : ''}${data.quickplay.global.medals_gold ? data.quickplay.global.medals_gold : ''}` +
                        `\nSilver Medals: ${!data.quickplay.global.medals_silver ? `0` : ''}${data.quickplay.global.medals_silver ? data.quickplay.global.medals_silver : ''}` +
                        `\nBronze Medals: ${!data.quickplay.global.medals_bronze ? `0` : ''}${data.quickplay.global.medals_bronze ? data.quickplay.global.medals_bronze : ''}`,
                        inline: true
                    },
                    {
                        name: 'All Time Totals',
                        value: `Eliminations: ${!data.quickplay.global.eliminations ? `0` : ''}${data.quickplay.global.eliminations ? data.quickplay.global.eliminations : ''}` +
                        `\nDamage Done: ${!data.quickplay.global.damage_done ? `0` : ''}${data.quickplay.global.damage_done ? data.quickplay.global.damage_done : ''}` +
                        `\nDeaths: ${!data.quickplay.global.deaths ? `0` : ''}${data.quickplay.global.deaths ? data.quickplay.global.deaths : ''}` +
                        `\nFinal Blows: ${!data.quickplay.global.final_blows ? `0` : ''}${data.quickplay.global.final_blows ? data.quickplay.global.final_blows : ''}` +
                        `\nHealing Done: ${!data.quickplay.global.healing_done ? `0` : ''}${data.quickplay.global.healing_done ? data.quickplay.global.healing_done : ''}` +
                        `\nObjective Kills: ${!data.quickplay.global.objective_kills ? `0` : ''}${data.quickplay.global.objective_kills ? data.quickplay.global.objective_kills : ''}` +
                        `\nObjective Time: ${!data.quickplay.global.objective_time ? `0` : ''}${data.quickplay.global.objective_time ? data.quickplay.global.objective_time : ''}` +
                        `\nSolo Kills: ${!data.quickplay.global.solo_kills ? `0` : ''}${data.quickplay.global.solo_kills ? data.quickplay.global.solo_kills : ''}` +
                        `\nMulti Kills: ${!data.quickplay.global.multikills ? `0` : ''}${data.quickplay.global.multikills ? data.quickplay.global.multikills : ''}` +
                        `\nTime on Fire: ${!data.quickplay.global.time_spent_on_fire ? `0` : ''}${data.quickplay.global.time_spent_on_fire ? data.quickplay.global.time_spent_on_fire : ''}`,
                        inline: true
                    },
                    {
                        name: 'Averages',
                        value: `Eliminations: ${!data.quickplay.global.eliminations_average ? `0` : ''}${data.quickplay.global.eliminations_average ? data.quickplay.global.eliminations_average : ''}` +
                        `\nDamage Done: ${!data.quickplay.global.damage_done_average ? `0` : ''}${data.quickplay.global.damage_done_average ? data.quickplay.global.damage_done_average : ''}` +
                        `\nDeaths: ${!data.quickplay.global.deaths_average ? `0` : ''}${data.quickplay.global.deaths_average ? data.quickplay.global.deaths_average : ''}` +
                        `\nFinal Blows: ${!data.quickplay.global.final_blows_average ? `0` : ''}${data.quickplay.global.final_blows_average ? data.quickplay.global.final_blows_average : ''}` +
                        `\nHealing Done: ${!data.quickplay.global.healing_done_average ? `0` : ''}${data.quickplay.global.healing_done_average ? data.quickplay.global.healing_done_average : ''}` +
                        `\nObjective Kills: ${!data.quickplay.global.objective_kills_average ? `0` : ''}${data.quickplay.global.objective_kills_average ? data.quickplay.global.objective_kills_average : ''}` +
                        `\nObjective Time: ${!data.quickplay.global.objective_time_average ? `0` : ''}${data.quickplay.global.objective_time_average ? data.quickplay.global.objective_time_average : ''}`+
                        `\nSolo Kills: ${!data.quickplay.global.solo_kills_average ? `0` : ''}${data.quickplay.global.solo_kills_average ? data.quickplay.global.solo_kills_average : ''}` +
                        `\nTime on Fire: ${!data.quickplay.global.time_spent_on_fire_average ? `0` : ''}${data.quickplay.global.time_spent_on_fire_average ? data.quickplay.global.time_spent_on_fire_average : ''}`,
                        inline: true
                    },
                    {
                        name: 'Most In Game',
                        value: `Eliminations: ${!data.quickplay.global.eliminations_most_in_game ? `0` : ''}${data.quickplay.global.eliminations_most_in_game ? data.quickplay.global.eliminations_most_in_game : ''}` +
                        `\nDamage Done: ${!data.quickplay.global.damage_done_most_in_game ? `0` : ''}${data.quickplay.global.damage_done_most_in_game ? data.quickplay.global.damage_done_most_in_game : ''}` +
                        `\nFinal Blows: ${!data.quickplay.global.final_blows_most_in_game ? `0` : ''}${data.quickplay.global.final_blows_most_in_game ? data.quickplay.global.final_blows_most_in_game : ''}` +
                        `\nHealing Done: ${!data.quickplay.global.healing_done_most_in_game ? `0` : ''}${data.quickplay.global.healing_done_most_in_game ? data.quickplay.global.healing_done_most_in_game : ''}` +
                        `\nObjective Kills: ${!data.quickplay.global.objective_kills_most_in_game ? `0` : ''}${data.quickplay.global.objective_kills_most_in_game ? data.quickplay.global.objective_kills_most_in_game : ''}` +
                        `\nObjective Time: ${!data.quickplay.global.objective_time_most_in_game ? `0` : ''}${data.quickplay.global.objective_time_most_in_game ? data.quickplay.global.objective_time_most_in_game : ''}`+
                        `\nSolo Kills: ${!data.quickplay.global.solo_kills_most_in_game ? `0` : ''}${data.quickplay.global.solo_kills_most_in_game ? data.quickplay.global.solo_kills_most_in_game : ''}` +
                        `\nMulti Kills: ${!data.quickplay.global.multikills_best ? `0` : ''}${data.quickplay.global.multikills_best ? data.quickplay.global.multikills_best : ''}` +
                        `\nTime on Fire: ${!data.quickplay.global.time_spent_on_fire_most_in_game ? `0` : ''}${data.quickplay.global.time_spent_on_fire_most_in_game ? data.quickplay.global.time_spent_on_fire_most_in_game : ''}`,
                        inline: true
                    }],
                    timestamp: new Date()
                }}).catch(this.logger.error);
            }).catch((err) => {
                if (err.message && err.message.includes('PROFILE_NOT_FOUND')) {
                    return responder.error('Profile not found please check your input (player names are case sensitive!)')
                    .catch(this.logger.error);
                }
            });
        }
    }
}

module.exports = Overwatch;
