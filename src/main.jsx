import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FilterProvider from "./context/context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FilterProvider>
      <App />
    </FilterProvider>
  </React.StrictMode>
);
