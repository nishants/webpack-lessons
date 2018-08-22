# React css module
- This is used to rename css classnames to avoid global conflict
- Must be used along with css-loader 
- Functionally, does no do anything more than css-loader



# Advantages over css-loader

- allows class names to be **non-camelcase.**
- allows **styleName** that does not need to refer style.className
- **className** can use **global classes**, while **styleName** resolves to **prefixed css classnames**



**Setup**

```
npm install react-css-modules --save-dev
```



- set the **modules** options to true for **css-loader** (wont work without it)

```js
{
  loader: 'css-loader',
  options: {
    importLoaders: 2,
    modules: true,
    localIdentName: '[path][name]__[local]--[hash:base64:5]'
  }},
```

- also set the **localIdentName** if you want you class names to not be just random strings that change with each build



**Usage**

```js
import CSSModules from 'react-css-modules';
import componentStyles from './my-component-style.scss';

const MyComponent = /* define component*/
      
export default CSSModules(MyComponent, componentStyles);
```



