const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');

const devMode = process.env.NODE_ENV === 'development';

const output = {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
};

const plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: false
    }),
    new MiniCssExtractPlugin({
        filename: 'styles.css'
    })
];

const webpack_module = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [{
                loader: 'file-loader',
                options: {
                    name: 'assets/images/[name].[ext]'
                }
            }]
        }
    ]
};

const devServer = {
    contentBase: path.resolve(__dirname, 'public'),
    open: true
}

module.exports = {
    entry: './src/index.js',

    output,
    plugins,
    module: webpack_module, // module já é um nome reservado
    devServer
};

// Se o nosso projeto está rodando em modo de produção
if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(
      new OptimizeCSSAssets() // call the css optimizer (minification)
    );
  }