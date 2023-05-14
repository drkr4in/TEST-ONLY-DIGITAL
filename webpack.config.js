const path = require("path");
const plug = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    filename: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: "file-loader",
        options: {
          name: "./images/Vector.svg",
        },
      },
      {
        test: /\.png$/,
        loader: "file-loader",
        options: {
          name: "./images/prev.png",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new plug({
      title: "Only digital test",
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
};
