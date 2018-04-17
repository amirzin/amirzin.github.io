const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: 'html-loader?exportAsEs6Default'
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.html'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true
};