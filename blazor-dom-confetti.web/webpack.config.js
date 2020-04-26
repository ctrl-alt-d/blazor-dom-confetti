const path =  require('path');

module.exports = {
    entry: [
      './src/index.js',
    ],
    output: {
      path: path.resolve(__dirname, '../blazor-dom-confetti/wwwroot'),
      filename: 'bundle.js',
    },

  };