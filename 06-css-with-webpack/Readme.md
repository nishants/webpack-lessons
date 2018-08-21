# CSS with wepack
- all our css files will be included via an import statement in js
- so we use **mini-css-extract-plugin** to extract the css and bundle into a different file (https://github.com/webpack-contrib/mini-css-extract-plugin)

Why using multiple plugins : 
- **css-loader** : tells webpack how to handle the css

- **mini-css-expract-plugin** : collects imported css and create a css file in build dir

  

If you notice, css-loader is defined last, so executes first in the group. Then extract plugin loader extracts the css content, and  at last extract plugin creates the css files in output dir based on options passed to it.

**About css-loader**

This tells webpack 

https://github.com/webpack-contrib/css-loader

**About mini-css-expract-plugin**

It has a loader ( to collect all the css imported in project) and a plugin to generate the output file containing all the collected css.

```
npm install --save-dev mini-css-extract-plugin
```

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          "css-loader"
        ]
      }
    ]
  }
} 
```

** **may cause issue with HMR, check repo for advanced setting** 

