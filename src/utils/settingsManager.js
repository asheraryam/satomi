const chalk = require('chalk');

async function handleShutdown(satomi) {
    try {
        await satomi.mongodb.destroy();
    } catch (error) {
        satomi.logger.error(chalk.red.bold(`[Shutdown] ${error}`));
    }
    satomi.editStatus('invisible', null);
    satomi.disconnect({ reconnect: false });
}

module.exports = {
    handleShutdown
};
