const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    port: 3001,
    open: true,
    static: path.join(__dirname, 'dist'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
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
      name: "products_remote",
      filename: "remoteEntry.js",
      remotes: {
        host_app: "host_app@http://localhost:3000/remoteEntry.js",
      },
      exposes: {
        "./ProductsApp": "./src/ProductsApp",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "19.1.0",
          eager: true,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "19.1.0",
          eager: true,
        },
        "react-redux": {
          singleton: true,
        },
        "@reduxjs/toolkit": {
          singleton: true,
        },
      },   
    }),    
  ],
};
