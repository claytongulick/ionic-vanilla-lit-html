let path = require('path');
let package_json = require('./package.json');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let webpack = require('webpack');

let public_path = path.resolve(__dirname, 'dist');

let webpack_config = {
    entry: `${__dirname}/source/app.js`,
    mode: "development",
    context: path.resolve(__dirname,'source'),
    output: {
        path: public_path,
        chunkFilename: path.join('[name]','chunks','[id].js'),
        filename: path.join('[name]','[name].js'),
        publicPath: "/"
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'local'),
            VERSION: JSON.stringify(package_json.version),
        }),
        new HtmlWebpackPlugin(
            {
                title: "Ionic 4 Vanilla Example",
                template: path.resolve(__dirname,'templates', 'index.hbs'),
                filename: 'index.html',
                chunksSortMode: 'none'
            }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'node_modules/@ionic/core/dist/ionic/svg'),
                to: path.resolve(__dirname, 'dist/svg')
            },
        ])
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.hbs$/,
                loader: "handlebars-loader"
            }

        ]
    }
};

module.exports = webpack_config;