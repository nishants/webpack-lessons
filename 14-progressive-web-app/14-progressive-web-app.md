# Creating progresive web app
- Create **service workers** (to serve pages offline)
- Create **manifest.json** to describe the app 
- Optimize app to make it **installable** on device



### Generating a manifest file :
- We will use **webpack-manifest-plugin** to generate manifest for our project

```bash
npm install --save-dev webpack-manifest-plugin
```



```js
const ManifestPlugin = require("webpack-manifest-plugin");
.
.
plugins: [
    new ManifestPlugin({})
]
```



Add following to <head>  of app.html

```html
<link rel="manifest" href="/manifest.json">
```



### Configuring to make app installable on device

- Use **Lighthouse** to audit the app
- Based audit reports, do following 

1. **Add seed for manifests to define important fields :** 

```js
new ManifestPlugin({
  seed : {
    name: "My PWA app",
    short_name: "the app",
    start_url: "/",
    display: "fullscreen",
    background_color: "#FFFFFF",
    theme_color: "#000000",
    icons: [{
      "src": "data:image/x-icon;base64,<BASE_64_CODE>==", // or url
      "sizes": "800x800",
      "type": "image/png"
    }]
  }
})
```

2. **Add following meta tags to app.html**

```html
<link rel="manifest" href="/manifest.json">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#317EFB"/>
```

