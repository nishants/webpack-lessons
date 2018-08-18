**Creating multiple chunks**

Create two different files for entry 

- page-one.js
- page-two.js

Use bothe pages in index.html

Configure webpack to 

- two entry files
- use substitution in output file name



```
module.exports = {
    entry: {
        "one": "./src/page-one.js",        
        "two": "./src/page-two.js"
    },
    output: {
        file: "page-[name].js"
    }
}
```



Run webpack with the config

```
npm run webpack --config webpack.config.js
```

