const HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude:/(node_modules)/,
        loader:"babel-loader",
        query:{
          presets:["env"]
        }
      },
      {
        test: /\.js$/,
        exclude:/(node_modules)/,
        loader:"eslint-loader",
        options: {

          }
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"],
      }
        
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      id:"game-field",
      template: "src/index.html"
    }),
    new CopyWebpackPlugin([
      {from:'favicon.ico',to:'favicon.ico'} 
    ])
  ]
}