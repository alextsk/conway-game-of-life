
// Generated on Wed Jul 04 2018 15:59:31 GMT+0700 (Красноярское время (зима))
var webpackConfig = require('./webpack.config.js');
module.exports = function(config) {
  config.set({
    basePath: '.',

    webpack: {
      mode: "none",
      module: {
        rules: [
          {
            test: /\.spec.js$/,
            loader: 'babel-loader',
            exclude:/(node_modules)/,
          }
        ]
      }
    },

    frameworks: ['jasmine'],
    files: [
     "src/**/*.spec.js"
    ],
    exclude: [
    ],
    preprocessors: {
      'src/**/*.spec.js': [ 'coverage', 'webpack' ]
    },
    reporters: [
      'progress', 'coverage' 
     // 'kjhtml'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
      'FirefoxHeadless',
      //'Chrome'
      ],
    singleRun: false,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
