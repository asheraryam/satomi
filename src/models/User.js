/* eslint prefer-const: 0 */

const Mongoose = require('mongoose');

let UserSchema = new Mongoose.Schema({
    serverID: { type: String },
    userID: { type: String },
    userName: { type: String },
    userDisc: { type: String },
    description: { type: String, default: 'Welcome to my profile' },
    xp: { type: Number, default: 0 },
    xpCD: { type: Date, default: new Date(0) },
    currency: { type: Number, default: 0 },
    currencyCD: { type: Date, default: new Date(0) },
    blacklist: { type: Boolean, default: false }
});

module.exports = Mongoose.model('Users', UserSchema);
