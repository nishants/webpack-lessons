## Webpack

- its a static module bundler
- reads dependecy graph of project, starting from and **entry poin**t and builds **static resources**(js, css, images) as output
- supports
  - ES5 **import**
  - CommonjS **require**


 # 



## Key Concepts

 - **Entry**
 - **Output**
 - **Loaders**
 - **Plugins**




### **Entry**

- default entry point **"./src/index.js"**
- this file is the root of dependency graph
- every other dependecy is included in this, or some other file via this file
- **there can be multiple entry points**

```js
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```

# 



### Output

- this is the file/dir where output is emitted to.
- default output path is **"./dist/main.js"**
- **path** : dir to which output files
- **filename** : filename of js file where all other are copiled

```js
module.exports = {
    entry: {
        filename: "main.js"
    },
    output: {
        filename: "bundle.js" // defaults to "./dir/bundle.js"
    }
}
```

- Use **substitution** if creating more than one chunk

  ```javascript
  module.exports = {
      entry: {
          filename: "./src/main.js"
      },
      output: {
          filename: "[name].js",
          path: __dirname+"/dist"
      }
  }
  ```

- **Public path** for output files


  ```js
  module.exports = {
      entry: {...},
      output: {
		 path: '/home/proj/cdn/assets/[hash]',
	     publicPath: 'http://cdn.example.com/assets/[hash]/'
      }
  }
  ```

- Setting **public path dynamically** (entry point file)

  ```js
  __webpack_public_path__ = myRuntimePublicPath;

  // entry point js file
  ```
#  



### Loaders

- allow using modules (import/require) for **filetypes other than javascript**

- by default webpack suports only js modules, for every other type (image, css, typescript etc) we need to add a loader

- loader is specified by two params : 

  - **test**
  - **use**

  ```js
  module.exports = {
    output: {
      filename: 'my-first-webpack.bundle.js'
    },
    module: {
      rules: [
        { test: /\.txt$/, use: 'raw-loader' }
      ]
    }
  };
  ```

- for above declaration, webpack will use 'raw-loader' for loading the files with .txt extension

# 



**Questions**

- can there be more than one entry point ?
- can there be more than one output file ?
- what is substitution in ouptput file names ? when do we use it ?
- can we define public path for bundled output ?
- can we specify the public path for output in entry file ?