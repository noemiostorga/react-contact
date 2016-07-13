var path = require('path');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devtool: '#source-map',
  resolve: {
    root: path.resolve('./src/')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/i, 
        loader: 'babel',
        exclude: /(node_modules|bower_components|dist)/,
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.json$/i,
        loader: 'json'
      }
    ]
  }
}