var watch = require('@ionic/app-scripts/dist/watch.js');
var copy = require('@ionic/app-scripts/dist/copy');

module.exports = {
  srcFiles: {
    paths: ['{{SRC}}/**/*.(ts|html|s(c|a)ss)', '{{ROOT}}/node_modules/sunbird-sdk/**/*.js'],
    options: {ignored: ['{{SRC}}/**/*.spec.ts', '{{SRC}}/**/*.e2e.ts', '**/*.DS_Store', '{{SRC}}/index.html']},
    callback: watch.buildUpdate
  },
  copyConfig: copy.copyConfigToWatchConfig()
};
