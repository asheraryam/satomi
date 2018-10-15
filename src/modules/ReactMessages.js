const { Module } = require('sylphy');

class ReactMessages extends Module {
    constructor(...args) {
        super(...args, {
            name: 'reactmessages',
            events: {
                messageCreate: 'onCreate'
            }
        });
    }

    onCreate (msg) {
        if (msg.content === 'owo' || msg.content === 'uwu') {
            return this._client.createMessage(msg.channel.id, 'uwu <:uwu:468426937686032385>');
        }

        if (msg.content === 'poggers' || msg.content === 'POGGERS') {
            return this._client.createMessage(msg.channel.id, '<:POGGERS:432986990338768896>');
        }

        if (msg.content === 'succ') {
            return this._client.createMessage(msg.channel.id, '<a:succsucc:468426964252884992>');
        }

        if (msg.content === '>clap.gif' || msg.content === 'clap.gif') {
            return this._client.createMessage(msg.channel.id, '<a:clap:413217369751561>');
        }
    }
}

module.exports = ReactMessages;
