const { Command } = require('sylphy')
const ivyList = require('../../assets/ivyList.js')

class Ivy extends Command {
    constructor (...args) {
        super(...args, {
            name: 'ivy',
            group: 'fun',
            cooldown: 5,
            options: {guildsOnly: true}
        })
    }

    handle ({ args, client, msg }, responder) {
        const ivy = ivyList.ivyQuotes[~~(Math.random() * ivyList.ivyQuotes.length)]

        return responder.send(' ', {embed:{
            color: 0x66dac3,
            title: ':heart: A Quote from the best girl:',
            description: ivy.name,
            timestamp: new Date()
        }})
        .catch(this.logger.error)
    }
}

module.exports = Ivy
