const path = require("path");
const plug = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    filename: path.resolve(__dirname, "src/index.ts"),
  },
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
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
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new plug({
      title: "Only digital test",
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
};
