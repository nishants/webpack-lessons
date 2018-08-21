# SCSS with webpack
- The scss loader works along with css loaders
- scss loader reads the scss files and converts it into css which is then processed by css loaders
- usually we will need some global config for scss to be available for all scss in the project
- so we will define two configs, one for processing the global ones and other for regular scss files
- hence there won't be a need for implicit scss @import in scss files



**We will user two loaders for scss files**

- **sass-loader** : to load scss files
- **sass-resource-loader** : to make global scss config available while loading other scss files




# sass-resource-loader

- avoid using @import in resources (perfomance issues in compilation)
- user resources array if one file is dependent on another

```
npm install sass-resources-loader --save-dev
```



```js
{
          loader: 'sass-resources-loader',
          options: {
            // Provide path to the file with resources
            resources: './path/to/resources.scss',

            // Or array of paths
            resources: ['./path/to/vars.scss', './path/to/mixins.scss']
}
```



# sass-loader

- requires **node-sass** or **dart-sass** as **peer dependency**
- must be chained with a loader for css as it simply compiles scss to css and passes on to next loader in the chain

```bash
npm install sass-loader node-sass webpack --save-dev
```

