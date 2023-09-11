const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: "development",
  devServer: {
    historyApiFallback: true, // Enable client-side routing
    port: 8080, // Port for development server
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
      name: 'container',
      remotes: {
        store: "store@http://localhost:8081/remoteEntry.js",
        customer: "customer@http://localhost:8082/remoteEntry.js",
        order: "order@http://localhost:8083/remoteEntry.js",
        content: "content@http://localhost:8084/remoteEntry.js",
      },
    }),
  ],
};