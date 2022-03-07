import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const RenderedApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(<RenderedApp />, document.getElementById("root"));
