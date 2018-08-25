# Images with webpack

- **file-loader** : emits file in output directory and returns public path in import/require statements
- **url-loade**r : converts file ino base64 code



In following example, we will create a config that 

- emebeds image in as base64 code if named as name.inline.ext
- and bundles as assets if named otherwise



```js
{
  // inline use file-load
  test: /\inline\.(svg|png|gif|jpg|jpeg)$/,
  exclude: /node_modules/,
  use: {
    loader: "url-loader"
  }
},
{
  // non inline use file-load
  test: /(?<!inline)\.(svg|png|gif|jpg|jpeg)$/, 
  exclude: /node_modules/,
  use: {
    loader: "file-loader"
  }
},
```