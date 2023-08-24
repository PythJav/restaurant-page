const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    index:'./src/index.js',
  base:'./src/base.js',
  home:'/src/home.js',
  about:'/src/about.js'},
  devtool: 'inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant Page',
    }),
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};