const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  // Build Mode
  mode: 'development',
  // Electron Entrypoint
  entry: './src/electron.ts',
  target: 'electron-main',
  resolve: {
    alias: {
      ['@']: path.resolve(__dirname, 'src')
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.ts$/,
      include: /src/,
      use: [{ loader: 'ts-loader' }]
    }]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' },
      ],
    }),
  ],
  output: {
    path: __dirname + '/build',
    filename: 'electron.js'
  }
}