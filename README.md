## Webpack

- its a static module bundler
- reads dependecy graph of project, starting from and **entry poin**t and builds **static resources**(js, css, images) as output
- supports
  - ES5 **import**
  - CommonjS **require**




## Key Concepts

 - **Entry**
 - **Output**
 - **Loaders**
 - **Plugins**




### **Entry**

- default entry point **"./src/index.js"**
- this file is the root of dependency graph
- every other dependecy is included in this, or some other file via this file
- there can be **multiple entry points**
- e.g.

```js
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```

- Above is same as 


```js
module.exports = {
    entry: {
        main: './path/to/my/entry/file.js'
    }
};
```

- Default config for entries : https://github.com/nishants/webpack-lessons/tree/master/01-hello-webpack-no-config




**Multi-main entry**

- entry point can be an array
- the multiple entry points, with their depedencies are compiled into a **single chunk**
- often used to include dependecies
-  e.g following compiles babel-polyfill along with project source into a single chunk

```js
entry: {
    app: [
        "babel-polyfill",
        "./client/index"
    ]
},
```



**Multiple entry points**

- Each entry point corrseponds to a chunk created : 

  ```js
  module.exports = {
    entry: {
      app: './src/app.js',
      vendors: './src/vendors.js'
    }
  };
  ```



**Multiple Page applications**

- Such applications have multiple pages, each page has its own html document and assets
- For such cases create different chunks
- User **CommonChunkPlugin** to share the code between the chunks
- e.g 

```js
module.exports = {
  entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js'
  }
};
```



**Quiz**

- can there be more than one entry point ?
- whast is the defualt entry point if not configured explicitly ?
- what happnes when entry point is an array ?
- How to create multiple chunks of bundled js output ?
- what is webpack bootstrap  ?
- What is the use of CommonsChunkPlugin ?

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
        filename: "bundle.js" // defaults to "./dist/bundle.js"
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



**Miscellenous :** 

- Mergins various webpack configurations : https://github.com/survivejs/webpack-merge
- ​

