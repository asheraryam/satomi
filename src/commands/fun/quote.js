const { Command } = require('sylphy')
const quoteList = require('../../assets/quoteList.js')

class Quote extends Command {
    constructor (...args) {
        super (...args, {
            name: 'quote',
            group: 'fun',
            cooldown: 3,
            options: {guildsOnly: true}
        })
    }

    handle ({ args, client, msg}, responder) {
        const quote = quoteList.quotes[~~(Math.random() * quoteList.quotes.length)]

        return responder.send(' ', {embed: {
            title: ':scroll: An Inspirational Quote: ',
            description: quote.name,
            color: 0x66dac3,
            timestamp: new Date()
        }})
        .catch(this.logger.error)
    }
}

module.exports = Quote
