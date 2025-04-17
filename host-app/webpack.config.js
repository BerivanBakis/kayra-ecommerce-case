const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    port: 3000,
    open: true,
    static: path.join(__dirname, 'dist'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js', 
    clean: true,
  },  
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }), 
    new ModuleFederationPlugin({
      name: "host_app",
      remotes: {
        products_remote: "products_remote@http://localhost:3001/remoteEntry.js",
        basket_remote: "basket_remote@http://localhost:3002/remoteEntry.js",
      },
      exposes: {
        "./store": "./src/shared/store",
      },
      shared: {
        react: { singleton: true, eager: true },
        "react-dom": { singleton: true, eager: true },
        'react-redux': { eager: true, singleton: true },
        "@reduxjs/toolkit": { eager: true, singleton: true },
      },
    }),
         
  ],
};
