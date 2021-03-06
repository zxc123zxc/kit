const 
    path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

const output        = path.resolve(__dirname, '../BE/Collabify/WebApplication/wwwroot');
const serviceWorker = path.resolve(__dirname, 'src', 'infrastructure', 'ServiceWorker.js');
const icons         = path.resolve(__dirname, 'src', 'icons');
const jsOutput      = path.resolve(output, 'js');

module.exports = {
    mode: "development",
    watch: true,
    entry: {
        main: [
            './src/app/mvp/main/Main.ts'
        ],
        login: [
            './src/app/mvp/login/Login.ts'
        ],

        SpaceModule: [
            './src/app/mvp/space/SpaceModule.ts'
        ],
        ComponentDemoModule: [
            './src/app/mvp/component_demo/ComponentDemoModule.ts'
        ],
        ReportsModule: [
            './src/app/mvp/reports/ReportsModule.ts'
        ]
    },
    output: {
        path: output,
        filename: 'js/[name].bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.scss'],
        alias: {
            'common':               path.resolve(__dirname, 'src', 'app', 'common'),
            'components':           path.resolve(__dirname, 'src', 'app', 'components'),
            'container':            path.resolve(__dirname, 'src', 'app', 'container'),
            'container_services':   path.resolve(__dirname, 'src', 'app', 'container_services'),
            'kit':                  path.resolve(__dirname, 'src', 'app', 'kit'),
            'mvp':                  path.resolve(__dirname, 'src', 'app', 'mvp'),
            'domain':               path.resolve(__dirname, 'src', 'app', 'domain'),
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            { 
                enforce: "pre", 
                test: /\.js$/, 
                loader: "source-map-loader" 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({ 
            template: path.resolve(__dirname, 'src', 'login.html'),
            filename: 'login.html',
            chunks: ['login']
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new CopyWebpackPlugin([{
            from: serviceWorker,
            to: path.resolve(output, 'sw.js'),
            toType: 'file'
        }], {copyUnmodified: false}),
        new CopyWebpackPlugin([{
            from: icons,
            to: path.resolve(output, 'icons'),
            toType: 'dir'
        }], {copyUnmodified: false})
    ]
}