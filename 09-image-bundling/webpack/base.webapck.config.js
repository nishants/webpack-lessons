const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevEnv = process.env.NODE_ENV === "development";

module.exports = {
  mode: isDevEnv ? "development" : "production",
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
        test: /\inline\.(svg|png|gif|jpg|jpeg)$/,
        exclude: /node_modules/,
        use: {
          loader: "url-loader"
        }
      },
      {
        test: /(?<!inline)\.(svg|png|gif|jpg|jpeg)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader"
        }
      },
    ]
  },
  plugins: [

  ]
}