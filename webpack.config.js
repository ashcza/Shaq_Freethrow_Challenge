module.exports = {
  entry: './app/shaq.js',
  output: {
    path: './dist',
  	filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '', '.js' ]
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        plugins: [ 'transform-runtime' ],
        presets: [ 'es2015' ]
      }
    }]
  }
};
