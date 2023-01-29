module.exports = {
  target: "node",
  mode: "development",
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
