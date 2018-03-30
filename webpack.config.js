const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const config = {
	entry: {
		'app': './src/app.module.js',
		'vendor': './src/vendor.module.js'
	},
	devtool: 'source-map',
	output: {
		filename: 'libs/[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: ['ng-annotate-loader', 'babel-loader']
			},
			{
				test: /\.(scss)$/,
				use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader','sass-loader']
				  })),
			},
			// for fixing of loading bootstrap icon files
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
				loader: 'url-loader?limit=10000',
				options: {
					name: './fonts/[name].[ext]'
				}
			},
			{
				test: /\.(eot|ttf)$/,
				loader: 'file-loader',
				options: {
					name: './fonts/[name].[ext]'
				}
			},
			{ test: /\.html$/, loader: 'html-loader' }
		]
	},
	plugins: [
		// new webpack.optimize.UglifyJsPlugin({
		// 	comments: false,
		// 	sourceMap: true,
		// }), // for mifiying js
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'libs/[name].bundle.js'
		}),
		new HtmlWebpackPlugin({
            template: './src/index.html',
            inject:'body',
            hash:true
		}),
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
			jquery: 'jquery'
		}),
        new ExtractTextPlugin('styles/styles.css'),
        new webpack.HotModuleReplacementPlugin()
		//new OptimizeCssAssetsWebpackPlugin()
	],
	devServer: {
		port: 3000,
		contentBase: './dist',
        historyApiFallback: true,
        compress:true,
        hot:true
	}
};

module.exports = config;
