const Mongoose = require('mongoose');

var GuildSchema = new Mongoose.Schema({
    serverName: { type: String, unique: true },
    serverID: { type: String, unique: true },
    welcome: { channelID: { type: String, default: '', unique: true }, message: { type: String, default: '' } },
    autoroleID: { type: String, default: '', unique: true },
    goodbye: { channelID: { type: String, default: '', unique: true }, message: { type: String, default: '' } },
    twLog: { type: String, default: '', unique: true },
    twStreamers: { name: { type: String, default: '' }, id: { type: String, default: '' } }
});

module.exports = Mongoose.model('Guild', GuildSchema);
