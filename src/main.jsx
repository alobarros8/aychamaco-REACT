import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
// es lo mismo a app()
//<div id="root"></div>
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
