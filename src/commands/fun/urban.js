const { Command } = require('sylphy')
const urban = require('urban')

class Urban extends Command {
    constructor (...args) {
        super (...args, {
            name: 'urban',
            group: 'fun',
            cooldown: 3,
            options: {guildsOnly: true},
            usage: [
                { name: 'word', displayName: 'word', type: 'string', optional: true, last: true }
            ]
        })
    }

    handle ({ args, client, msg}, responder) {
        if (args.word.length > 0) {
            urban(args.word).first(async(json) => {
                if (json === undefined) {
                    return responder.send(' ', {embed: {title: ':x: there was an issue finding that word, try again~'}})
                }
                return responder.send(' ', {embed: {
                    author: {
                        name: `Definition of ${json.word}`,
                        icon_url: 'https://pbs.twimg.com/profile_images/838627383057920000/m5vutv9g_400x400.jpg'
                    },
                    color: 0x66dac3,
                    description: json.definition,
                    url: json.permalink,
                    timestamp: new Date()
                }})
                .catch(this.logger.error)
        })} else {
            urban.random().first(async(json) => {
                return responder.send(' ', {embed: {
                    author: {
                        name: `Random Urban Dictionary Word! (${json.word})`,
                        icon_url: 'https://pbs.twimg.com/profile_images/838627383057920000/m5vutv9g_400x400.jpg'
                    },
                    color: 0x66dac3,
                    description: json.definition,
                    url: json.permalink,
                    timestamp: new Date()
                }})
                .catch(this.logger.error)
            })
        }
    }
}

module.exports = Urban
