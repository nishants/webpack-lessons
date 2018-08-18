const
    webpack = require("webpack"),
    path = require("path");

module.exports = {
  entry: {
    "app": "./src/index.js"
  },
  output: {
    filename: "page-[name].js"
  },
  module: {
    rules: [
      {
        test: /\.jpeg$/,
        use: [
          {
            loader: path.resolve('./src/custom-image-loader.js'),
            options: {
              assetPath: (imageAbsolutePath)=> {
                //
                return imageAbsolutePath.split(process.cwd())[1].replace("/src", "");
              }
            }
          }
        ]
      }
    ]
  }
}