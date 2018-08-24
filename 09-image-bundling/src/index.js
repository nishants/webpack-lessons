import React from "react";
import ReactDOM from "react-dom";

import image from "./images/image.png"
import imageInline from "./images/image.inline.jpeg"
const
    App = ()=> <div>
      <h3> Normal
      <img src={"dist/"+image}/>
      </h3>
      <br/>
      <h3> Inline
      <img src={imageInline}/>
      </h3>
    </div>;

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);