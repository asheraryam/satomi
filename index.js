const { Crystal } = require('sylphy');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

require('longjohn');
require('dotenv-safe').config({
    path: path.join(__dirname, '.env'),
    allowEmptyValues: true
});

const ascii = () => {
    fs.readFile('./src/assets/satomiASCII.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log(data);
    });
};

const cluster = new Crystal(path.join('src', 'satomi.js'), parseInt(process.env.CLIENT_PROCESSES, 10));
const timestamp = () => `[${chalk.grey(moment().format('HH:mm:ss'))}]`;

cluster.on('clusterCreate', (id) => console.log(`${timestamp()} [MASTER]: CLUSTER ${chalk.cyan.bold(id)} ONLINE`));

cluster.createClusters()
    .then(() => ascii() + console.log(`${timestamp()} [MASTER]: ` + chalk.magenta('We\'re live, ladies and gentlemen.')))
    .catch((err) => console.error(err));
