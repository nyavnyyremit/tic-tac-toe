exports.files = {
  javascripts: {
    joinTo: 'app.js'
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {presets: ['latest', 'react']},
  sass: {modules: {ignore: [/application\.scss/,]}},
  postcss: {processors: [require('autoprefixer')]},
  eslint: {pattern: /^app\/.*\.js?$/, warnOnly: true}
};

exports.hot = true;
