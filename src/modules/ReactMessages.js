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
        if (msg.content === 'owo') {
            return this._client.createMessage(msg.channel.id, 'uwu <:uwu:468426937686032385>');
        }

        if (msg.content === 'poggers' || msg.content === 'POGGERS') {
            return this._client.createMessage(msg.channel.id, '<:POGGERS:432986990338768896>');
        }
    }
}

module.exports = ReactMessages;
