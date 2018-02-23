const { Command } = require('sylphy');
const weather = require('yahoo-weather');

class Weather extends Command {
    constructor (...args) {
        super (...args, {
            name: 'weather',
            group: 'search',
            aliases: ['w'],
            cooldown: 5,
            options: { guildOnly: true },
            usage: [
                { name: 'city', displayName: 'city', type: 'string', optional: false, last: true },
                { name: 'tempunit', displayName: 'tempunit', type: 'string', choices: ['f', 'c'], optional: true }
            ]
        });
    }

    handle ({ args }, responder) {
        const city = args.city;
        const tempunit = args.tempunit;

        weather(city, tempunit).then((info) => {
            const url = info.item.link;
            if (info === null) {
                return responder.send(`:no_entry_sign: couldnt find weather on ${city}`);
            }

            return responder.send(' ', {embed: {
                color: 0xffd7ee,
                title: `Yahoo! Weather Info on ${info.location.city}, ${info.location.country}~`,
                url: url.substr(url.lastIndexOf('*') + 1),
                thumbnail: {
                    url: info.item.description.slice(19, 56)
                },
                fields: [{
                    name: ':thermometer: Temperature',
                    value: `${info.item.condition.temp} °${info.units.temperature}`,
                    inline: true
                },
                {
                    name: ':droplet: Humidity',
                    value: `${info.atmosphere.humidity}`,
                    inline: true
                },
                {
                    name: ':dash: Wind Speed',
                    value: `${info.wind.speed} ${info.units.speed}`,
                    inline: true
                },
                {
                    name: ':umbrella: Conditions',
                    value: `${info.item.condition.text}`,
                    inline: true
                },
                {
                    name: ':sunny: Todays High',
                    value: `${info.item.forecast[0].high} °${info.units.temperature}`,
                    inline: true
                },
                {
                    name: ':cloud: Todays Low',
                    value: `${info.item.forecast[0].low} °${info.units.temperature}`,
                    inline: true
                },
                {
                    name: ':sunrise: Sunrise',
                    value: `${info.astronomy.sunrise}`,
                    inline: true
                },
                {
                    name: ':city_sunset: Sunset',
                    value: `${info.astronomy.sunset}`,
                    inline: true
                }],
                timestamp: new Date(),
                footer: {
                    text: `${info.item.title} `
                }
            }});
        }).catch(this.logger.error);
    }
}

module.exports = Weather;
