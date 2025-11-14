import "./App.css"
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { SEOContext } from "./SEOMetadata";

hydrateRoot(
  document.getElementById("root"),
  <SEOContext.Provider value={null}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SEOContext.Provider>
);
