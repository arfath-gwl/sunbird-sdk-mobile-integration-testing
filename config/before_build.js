const fs = require('fs-extra');
const path = require('path');

const env = process.env['SUNBIRD_ENV']; // dev, staging, prod

// copy sunbird-sdk-config
fs.copySync(path.resolve(__dirname, '../environments/' + env + '/sunbird-sdk-config.ts'), path.resolve(__dirname, '../src/environment/sunbird-sdk-config.ts'));

// copy assets/data
fs.copySync(path.resolve(__dirname, '../environments/' + env + '/data'), path.resolve(__dirname, '../src/assets/data'));
