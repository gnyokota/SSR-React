const path = require("path");

module.exports = {
  mode: "development",
  //tell webpack the root file
  entry: path.resolve(__dirname, "src/client/index.js"),
  //tell webpack where to put the bundle
  output: {
    filename: "client.bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  //tell webpack to run babel
  //react: coverts jsx into normal js
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
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
