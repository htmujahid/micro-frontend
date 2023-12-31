const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: "development",
  devServer: {
    historyApiFallback: true, // Enable client-side routing
    port: 8082, // Port for development server
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'customer',
      filename: 'remoteEntry.js',
      exposes: {
        './Customer': './src/bootstrap.js',
      },
    }),
  ],
};