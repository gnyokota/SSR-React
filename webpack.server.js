const path = require("path");

module.exports = {
  //inform webpack that the bundle is for node.js (not for the browser)
  target: "node",
  mode: "development",
  //tell webpack the root file
  entry: path.resolve(__dirname, "src/index.js"),
  //tell webpack where to put the bundle
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  //tell webpack to run babel
  //react: coverts jsx into normal js
  //stage-0: handle async code
  //env: meet the requirements (es5) for last 2 browser version
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              ["@babel/preset-env", {targets: {browsers: ["last 2 versions"]}}],
            ],
          },
        },
      },
    ],
  },
};
