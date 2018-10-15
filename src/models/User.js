const Mongoose = require('mongoose');

var UserSchema = new Mongoose.Schema({
    serverID: { type: String, unique: true },
    userID: { type: String },
    exp: { type: Number, default: 0 },
    yennies: { type: Number, default: 0 }
});

module.exports = Mongoose.model('User', UserSchema);
