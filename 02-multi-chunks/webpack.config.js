module.exports = {
  entry: {
    "one": "./src/page-one.js",
    "two": "./src/page-two.js"
  },
  output: {
    filename: "page-[name].js"
  }
}