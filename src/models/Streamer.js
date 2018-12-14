/* eslint prefer-const: 0 */

const Mongoose = require('mongoose');

let StreamerSchema = new Mongoose.Schema({
    serverID: { type: String, default: '' },
    streamer: { type: String, default: '' }
});

module.exports = Mongoose.model('Streamers', StreamerSchema);
