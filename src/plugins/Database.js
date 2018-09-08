const Mongoose = require('mongoose');
// const Schema = Mongoose.Schema;
const chalk = require('chalk');

// var rolesSchema = new Schema({
//     roleID: String
// }, { collection: 'Roles' });

class Database {
    constructor(options={}) {
        this.URI = `mongodb://${options.username}:${options.password}@${options.host}:${options.port}/${options.dbname}`;
        // this.models = { roles: Mongoose.model('Roles', rolesSchema) };
        // this.cache = { roles: {} };
    }

    load(satomi) {
        return new Promise((resolve, reject) => {
            this.satomi = satomi;
            Mongoose.Promise = global.Promise;
            Mongoose.connect(this.URI, { useNewUrlParser: true }).catch((error) => {
                return reject(error);
            });
            Mongoose.connection.on('error', (error) => this.satomi.logger.error(chalk.red.bold(`[DB] Mongoose error: ${error}`)));
            Mongoose.connection.once('open', () => this.satomi.logger.info(chalk.green.bold('[DB] Mongoose Connected')));
            return resolve(this);
        });
    }

    destroy() {
        return new Promise((resolve, reject) => {
            this.satomi = undefined;
            Mongoose.disconnect().catch((error) => {
                return reject(error);
            });
            Mongoose.connection.removeAllListeners('error');
            Mongoose.connection.removeAllListeners('open');
            return resolve();
        });
    }
}

module.exports = Database;
