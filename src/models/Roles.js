const Mongoose = require('mongoose');

var RolesSchema = new Mongoose.Schema({
    serverID: { type: String },
    roleID: { type: String, unique: true },
    roleName: { type: String }
});

module.exports = Mongoose.model('Roles', RolesSchema);