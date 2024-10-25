import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css";

import State from "./components/State.jsx";
import Events from "./components/Events.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Events /> */}
    <State />
  </StrictMode>
);
