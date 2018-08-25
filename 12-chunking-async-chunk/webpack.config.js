const
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    "one": "./src/page-one.js",
    "two": "./src/page-two.js",
    "react-app": "./src/react-app.js"
  },
  output: {
    filename: "page-[name]-[contenthash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
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
  ],
  optimization: {
    splitChunks: {
      minSize: 1,
      maxAsyncRequests: 10,
      chunks: 'all',
      minChunks: 1,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
      }
    }
  }
}