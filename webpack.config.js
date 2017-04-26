var webpack = require('webpack');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx' 
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
      'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname, 
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname, 
		alias: {
			Main: 'app/components/Main.jsx',
			Nav: 'app/components/Nav.jsx',
			Board: 'app/components/Board.jsx',
			Turns: 'app/components/Turns.jsx',
			Clues: 'app/components/Clues.jsx',
			Colors: 'app/components/Colors.jsx',
			SecretCode: 'app/components/SecretCode,jsx',
	    applicationStyles: 'app/styles/app.scss'
	},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: 'cheap-module-eval-source-map'
};