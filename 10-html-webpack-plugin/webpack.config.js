const
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
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
    new HTMLWebpackPlugin({title: "Generated HTML Test"}),
    new HTMLWebpackPlugin({
      title: 'Custom template',
      filename: 'index--from-template.html',
      template: './src/app.html'
    })
  ]
}