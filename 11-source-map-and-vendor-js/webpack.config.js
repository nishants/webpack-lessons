const
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    "one": "./src/page-one.js",
    "two": "./src/page-two.js"
  },
  output: {
    filename: "page-[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: "[name].css"}),
    new HTMLWebpackPlugin({
      title: 'Custom template',
      filename: 'index.html',
      template: './src/app.html'
    })
  ]
}