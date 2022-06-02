const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist")
  },

  devServer: {port: 3000},

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
  ],

  resolve: {
      modules: [__dirname, "src", "node_modules"],
      extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },

  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /(node_modules|bower_components)/,
              loader: require.resolve("babel-loader"),
          },
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
          },
          {
              test: /\.png|svg|jpg|gif$/,
              use: ['file-loader'],
          },
      ],
  },
};