import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./AppRoutes.tsx";
import Auth0ProviderWithNaviage from "./auth/Auth0ProviderWithNaviage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Auth0ProviderWithNaviage>
        <AppRoutes />
      </Auth0ProviderWithNaviage>
    </Router>
  </StrictMode>
);
