const { getDefaultConfig } = require('expo/metro-config');
const rnNodeLibs = require('node-libs-react-native');
const path = require('path');

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
  ...rnNodeLibs,
  net: require.resolve('empty-module'),
  tls: require.resolve('empty-module'),
};

config.resolver.sourceExts.push('cjs');

module.exports = config;
