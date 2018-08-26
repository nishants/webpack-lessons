# Using service worker

- to demo **offline functionaliy**, lets use an http server to server our contents
- later we will turn the server off to check if app works offline



```bash
 npm install --save-dev http-server	
```



 





**Workbox** 

- workbox is a util by google to support offline pages (using web workers)
- we will use the workbox-webpack-plugin for making pages being available offline

```bash
npm install --save workbox-webpack-plugin	
```

**Workbox-webpack-plugin**

Has two plugin options 

- **GenerateSW** plugin : for simple use cases
- **InjectManifest** plugin : for more customised use cases



## Using GenerateSW plugin

- Use GenerateSW plugin from **workbox-webpack-plugin**

```js
const { GenerateSW } = require("workbox-webpack-plugin");
.
.
  plugins: [
    new GenerateSW({
      clientsClaim: true, // replacing service workers
      skipWaiting:  true, // load service workers quickly on site load
    })
  ],

```

- Load service worker in source code 

```javascript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
```

