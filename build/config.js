const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');
const Components = require('../components.json');
const saladConfig = require('./salad.config.json');

const utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
const mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));
const transitionList = fs.readdirSync(path.resolve(__dirname, '../src/transitions'));
var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`jeffery-ui/packages/${key}`] = `jeffery-ui/lib/${key}`;
});

externals['jeffery-ui/src/locale'] = 'jeffery-ui/lib/locale';
utilsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`jeffery-ui/src/utils/${file}`] = `jeffery-ui/lib/utils/${file}`;
});
mixinsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`jeffery-ui/src/mixins/${file}`] = `jeffery-ui/lib/mixins/${file}`;
});
transitionList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`jeffery-ui/src/transitions/${file}`] = `jeffery-ui/lib/transitions/${file}`;
});

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'jeffery-ui': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date.\js/;

exports.postcss = function(webapck) {
  saladConfig.features.partialImport = {
    addDependencyTo: webapck
  };
  return [
    require('postcss-salad')(saladConfig)
  ];
};
