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
- e.g following compiles babel-polyfill along with project source into a single chunk

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

Example : https://github.com/nishants/webpack-lessons/tree/master/02-multi-chunks

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

  Example : https://github.com/nishants/webpack-lessons/tree/master/02-multi-chunks

  ​

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

**Quiz :**

- can there be more than one output file decalaration in config?
- what is substitution in ouptput file names ? when do we use it ?
- can we define public path for bundled output ?
- can we specify the public path for output in entry file ?

#  



### Loaders

- allow using modules (import/require) for **filetypes other than javascript**

- by default webpack suports only js modules, for every other type (image, css, typescript etc) we need to add a loader

- applies transformations on the source code of modules

- loader is specified as **module.rules** with two params : 

  - **test** (what extension types to apply loader to)
  - **use** (which loader to apply)

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

- loaders are chained and exectured in **reverse order** (bottom to top or right to left)

- **a loader passes its result to the next loader in chain**

- Finally, javascript code is returned by last loader that exectues in the chain

- loaders run in node env

- can be synchronous or asynchronous

- can be passed an **options** object

- **loaders can emit additional arbitrary files** (apart for output chunks)

**Three ways of using loader for a file type**

- webpack configuration (recommended)
- inline (with import statement)
- from CLI

**Defining a loader**

- loaders can either be resolved from node_modules
- or be described as file in source code

**Defining loader from a file** 

```js
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve('path/to/loader.js'),
            options: {/* ... */}
          }
        ]
      }
    ]
  }
};
```

**Defining a directory with loaders**

- there could be multiple loaders defined for a project
- lets say all these loaders are present in a dir "loaders"
- the user resolveLoader attribute to search for loaders in the dir (apart form node_modules)

```js
module.exports = {
  //...
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'loaders')
    ]
  }
};
```



# **Questions**

- How many ways can a loader be applied to a filetype ? Name them.
- How can you pass options to loader in webpack config ?



# How loaders work?

- A loader is just a module that exports a function

- the function can access Loader API through the "this" context.

- Run in node environment hence can do anything that can be done in node

- sample Loader

- ```js
  import { getOptions } from 'loader-utils';
  import validateOptions from 'schema-utils';

  const schema = {
    type: 'object',
    properties: {
      test: {
        type: 'string'
      }
    }
  };

  export default function(source) {
    const options = getOptions(this);

    validateOptions(schema, options, 'Example Loader');

    // Apply some transformations to the source...

    return `export default ${ JSON.stringify(source) }`;
  }
  ```

# Plugins

- plugins are what power the compiler of webpack
- these are JS objects with an **apply** function
- a plugin can **tap** into any part of compilation process and run e.g after entry, before run,before compile, done etc (https://webpack.js.org/api/compiler-hooks/)
- this tapping is powered by another plugin called **tappable**
- e.g 

**Using a plugin**

```js
  const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
  const webpack = require('webpack'); //to access built-in plugins
  const path = require('path');

  module.exports = {
    entry: './path/to/my/entry/file.js',
    output: {
      filename: 'my-first-webpack.bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader'
        }
      ]
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({template: './src/index.html'})
    ]
  };
```

**Declaring a plugin**

```js
  const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

  class ConsoleLogOnBuildWebpackPlugin {
    apply(compiler) {
      compiler.hooks.run.tap(pluginName, compilation => {
        console.log('The webpack build process is starting!!!');
      });
    }
  }
```



**Miscellenous :** 

- Merging various webpack configurations : https://github.com/survivejs/webpack-merge
- ​