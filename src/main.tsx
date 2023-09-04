import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";

// main để kết nối với file html
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
