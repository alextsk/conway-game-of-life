
module.exports = function(config) {
    config.set({
        frameworks: ["jasmine"],
        exclude:['node_modules'],
        webpack:{
            resolve: {
                extensions: [".ts", ".tsx"]
            },
            mode: "none",
            module: {
                rules: [
                    {
                        test: /\.ts$/,
                        loader: 'awesome-typescript-loader',
                        exclude:/(node_modules)/,
                        options: {
                            configFile :'tsconfig.json'
                        }
                    }
                ]
            }
        },
        files: [
            "./src/**/*.spec.ts" 
        ],
        preprocessors: {
            "./**/*.ts": ["webpack", 'coverage','sourcemap'],
            "./**/*.spec.ts": ["webpack", 'sourcemap','coverage'],

        },

        remapCoverageReporter: { html: './coverage' },
        reporters: ["progress", 'coverage', 'remap-coverage'],
        browsers: ["FirefoxHeadless"]
    });
};