var webpack = require('webpack');

module.exports = {
  entry: './app.ts',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  //turn on source-map
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  //Add minification
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin()
  // ],
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
