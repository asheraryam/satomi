const { Client } = require('sylphy');

class SatomiClient extends Client {
    constructor(options = {}) {
        super(options);
        this.hexColor = 0x98ffa6;
        this.owColor = 0xe59d2d;
        this.lolColor = 0xfff861;
        this.userAgent = `Satomi (https://github.com/envyist/satomi) v(${require('../../package.json').version})`;
    }
}

module.exports = SatomiClient;
