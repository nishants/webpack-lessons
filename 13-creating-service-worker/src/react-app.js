import React from "react";
import ReactDOM from "react-dom";

const App = ()=> <h1>This is the react app</h1>;

ReactDOM.render(
    <App/>,
    document.getElementById("react-app")
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
