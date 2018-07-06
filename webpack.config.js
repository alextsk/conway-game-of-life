const HtmlWebpackPlugin = require('html-webpack-plugin')

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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      id:"game",
      template: "src/index.html"
    })
  ]
}