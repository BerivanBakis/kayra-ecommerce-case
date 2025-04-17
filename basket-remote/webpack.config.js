const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: {
    port: 3002,
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
      name: "basket_remote",
      filename: "remoteEntry.js",
      exposes: {
        "./BasketApp": "./src/BasketApp",
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
      },      
    }),
  ],
};
