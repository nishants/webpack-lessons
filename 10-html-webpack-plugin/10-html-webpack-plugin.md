# HTML Webpack Plugin
- allows generating html with the bundle
- **automatically** adds all generated bundle as script tags inside html body
- supports options for html like title
- supports using custom template like blueimp (default), handlebar, pug etc
- https://github.com/jantimon/html-webpack-plugin

 e.g 

```
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "one": "./src/page-one.js",
    "two": "./src/page-two.js"
  },
  output: {
    filename: "page-[name].js"
  },
  plugins: [
      new HTMLWebpackPlugin()
  ]
}
```

will generate and html file in **dist/** as

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Generated HTML Test</title>
</head>
<body>
<script type="text/javascript" src="page-one.js"></script>
<script type="text/javascript" src="page-two.js"></script>
</body>
</html>
```

Simlariliy it will also add any number of **css** files to emitted to **dist** to **head** 

e.g for following config 

```html
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
    new HTMLWebpackPlugin({title: "Generated HTML Test"})
  ]
}
```

It will generate following html 

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Generated HTML Test</title>
    <link href="one.css" rel="stylesheet">
    <link href="two.css" rel="stylesheet">
</head>
<body>
<script type="text/javascript" src="page-one.js"></script>
<script type="text/javascript" src="page-two.js"></script>
</body>
</html>
```

# Custom html template
Also we can choose to define our own custom template with following config  