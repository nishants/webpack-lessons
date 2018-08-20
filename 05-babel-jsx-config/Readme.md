# Installing babel
npm i babel-loader babel-core babel-preset-env babel-preset-react --save-dev

Create file .babelrc : 
{
  "presets": ["env", "react"]
}

User babel loader for JS files : 
{
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader"
    }
}

