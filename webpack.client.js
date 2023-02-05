const path = require('path')
const { merge } = require('webpack-merge')
const commonCongif = require('./webpack.common.js')

const clientConfig = {
  //tell webpack the root file
  entry: path.resolve(__dirname, 'src/client/index.js'),
  //tell webpack where to put the bundle
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  //tell webpack to run babel
  //react: coverts jsx into normal js
  //env: meet the requirements (es5) for last 2 browser version
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}

module.exports = merge(commonCongif, clientConfig)
