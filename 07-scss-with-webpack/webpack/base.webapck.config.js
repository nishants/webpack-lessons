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
        test: /\.scss/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 2 } },
          "sass-loader",
          {
            loader: 'sass-resources-loader',
            options: {
              // resources: []
              resources: ['./src/style/base/_vars.scss', './src/style/base/_base.scss']
              // resources: './src/style/base/*.scss'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
}