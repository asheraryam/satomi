/* eslint prefer-const: 0 */

const Mongoose = require('mongoose');

let UserSchema = new Mongoose.Schema({
    serverID: { type: String },
    userID: { type: String },
    userName: { type: String },
    userDisc: { type: String },
    xp: { type: Number, default: 0 },
    yennies: { type: Number, default: 0 },
    yenniesCD: { type: Date, default: new Date(0) },
    blacklist: { type: Boolean, default: false }
});

module.exports = Mongoose.model('Users', UserSchema);
