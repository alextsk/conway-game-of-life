const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TSLintPlugin = require('tslint-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/Controller.ts',
  output: {
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
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
      template: "src/index.html"
    }),
    new CopyWebpackPlugin([
      {from:'favicon.ico', to:'favicon.ico'} 
    ]),
    new TSLintPlugin({
      files: ['./src/**/*.ts']
    })
  ]
}