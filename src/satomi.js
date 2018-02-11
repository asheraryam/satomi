const Client = require('sylphy');
const chalk = require('chalk');
const winston = require('winston');
const moment = require('moment');
const statusList = require('./assets/statusList.js');
const masterkeys = require('../masterkeys.json');
const fs = require('fs');

const logger = new (winston.Logger)({
    transports: [
        new(winston.transports.Console)({
            level: 'silly',
            colorize: true,
            timestamp: () => `[${chalk.magenta(moment().format('YYYY MMM Do, h:mm:ss a'))}]`
        })
    ]
});

const satomi = new Client({
    token: masterkeys.token,
    prefix: masterkeys.prefix,
    modules: './src/modules',
    messageLimit: 0,
    getAllUsers: true,
    disableEveryone: false,
    maxShards: 'auto'
});

const cmdpath = './src/commands';
satomi.unregister('logger', 'console');
satomi.register('logger', 'winston', logger);
satomi.unregister('middleware', true);
satomi.register('middleware', './src/middleware');
satomi.register('commands', cmdpath, { groupedCommands: true });

fs.readFile('./src/assets/satomiASCII.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
});

satomi.on('ready', () => {
    const shards = satomi.shards.size;
    const guilds = satomi.guilds.size;
    const users = satomi.users.size;

    satomi.logger.info(
        `Shards: ${chalk.cyan.bold(shards)} | ` +
        `Servers: ${chalk.cyan.bold(guilds)} | ` +
        `Users: ${chalk.cyan.bold(users)}`
    );
    satomi.logger.info(chalk.yellow.bold(`Prefix: ${satomi.prefix}`));
    satomi.logger.info(chalk.green.bold('Satomi Is Ready To Rumble~!'));

    satomi.changeStatus = function() {
        const status = statusList.statuses[~~(Math.random() * statusList.statuses.length)];
        satomi.editStatus({name: status.name, type: status.type || 0});
    };

    setInterval(() => satomi.changeStatus(), 60000);
});

satomi.on('shardReady', (id) => {
    satomi.logger.info(chalk.green.bold(`Shard "${id}" is ready`));
});

satomi.on('shardDisconnect', (id) => {
    satomi.logger.info(chalk.red.bold(`Shard "${id}" has disconnected`));
});

satomi.on('shardResume', (id) => {
    satomi.logger.info(chalk.green.bold(`Shard "${id}" has resumed`));
});

satomi.on('error', err => satomi.logger.error(err));

satomi.run();
