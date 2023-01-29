const path = require("path");
const {merge} = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackNodeExternals = require("webpack-node-externals");
const commonCongif = require("./webpack.common.js");

const serverConfig = {
  //inform webpack that the bundle is for node.js (not for the browser)
  target: "node",
  //tell webpack the root file
  entry: path.resolve(__dirname, "src/server.js"),
  //tell webpack where to put the bundle
  output: {
    filename: "server.bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  //tell webpack to run babel
  //react: coverts jsx into normal js
  //env: meet the requirements (es5) for last 2 browser version
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {loader: "css-loader"}],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../public/styles.bundle.css",
    }),
  ],
  //node_modules are not included as part of the bundle
  externals: [webpackNodeExternals()],
};

module.exports = merge(commonCongif, serverConfig);
