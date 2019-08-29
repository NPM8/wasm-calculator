const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WasmPackPlugin  =  require("@wasm-tool/wasm-pack-plugin");

const {
  NODE_ENV = 'development'
} = process.env

const baseConfig = {
  entry: {
    popup: "./src/ts/popup/index.ts",
    background: "./src/ts/background/index.ts"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: "./manifest.json",
        to: path.resolve(__dirname, "dist"),
      }
    ]),
    new HtmlWebpackPlugin({
      template: "./src/html/popup/index.html",
      filename: "popup.html",
      chunks: ["popup","styles"],
    }),
    new WasmPackPlugin({
          crateDirectory: path.resolve(__dirname, ".")
    })
  ]
}

const developmentConfig = {
  ...baseConfig,
  mode: "development",
  devtool: "#eval-module-source-map",
  plugins: [
    ...baseConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
  ]
} 

const productionConfig = {
  ...baseConfig,
  mode: "production",
  devtool: "#source-map",
  plugins: [
    ...baseConfig.plugins,
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ]
}

module.exports = (NODE_ENV == "development") 
  ? developmentConfig 
  : productionConfig;
