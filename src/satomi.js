const { Client } = require('sylphy');
const chalk = require('chalk');
const winston = require('winston');
const moment = require('moment');
const statusList = require('./assets/statusList.js');
//const masterkeys = require('../masterkeys.json');
const path = require('path');
const fs = require('fs');

//const processID = parseInt(process.env['PROCESS_ID'], 10);
//const processShards = parseInt(process.env['SHARDS_PER_PROCESS'], 10);
//const firstShardID = processID * processShards;
//const lastShardID = firstShardID + processShards - 1;

const resolve = (str) => path.join('src', str);

const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            level: 'silly',
            colorize: true,
            //label: processShards > 1 ? `C ${firstShardID}-${lastShardID}` : `C ${processID}`,
            timestamp: () => `[${chalk.magenta(moment().format('YYYY MMM Do, h:mm:ss a'))}]`
        })
    ]
});

const satomi = new Client({
    token: process.env.CLIENT_TOKEN,
    prefix: process.env.CLIENT_PREFIX,
    //admins: (process.env['ADMINS']).split(', '),
    modules: resolve('modules'),
    messageLimit: 0,
    getAllUsers: true,
    disableEveryone: false,
    maxShards: 'auto',
    //firstShardID,
    //lastShardID,
    autoreconnect: true
});

const cmdpath = resolve('commands');
satomi.unregister('logger', 'console');
satomi.register('logger', 'winston', logger);
satomi.unregister('middleware', true);
satomi.register('middleware', resolve('middleware'));
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

satomi.on('shardReady', (id) => satomi.logger.info(chalk.green.bold(`Shard "${id}" is ready`)));

satomi.on('shardDisconnect', (id) => satomi.logger.info(chalk.red.bold(`Shard "${id}" has disconnected`)));

satomi.on('shardResume', (id) => satomi.logger.info(chalk.green.bold(`Shard "${id}" has resumed`)));

satomi.on('error', (err) => {
    satomi.logger.error(err);
});

satomi.run();

// process.on('uncaughtException', (err) => logger.error(err));
// process.on('unhandledRejection', (err) => logger.error(err));
