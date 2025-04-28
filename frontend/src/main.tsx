import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./AppRoutes.tsx";
import Auth0ProviderWithNaviage from "./auth/Auth0ProviderWithNaviage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Auth0ProviderWithNaviage>
          <AppRoutes />
        </Auth0ProviderWithNaviage>
      </QueryClientProvider>
    </Router>
  </StrictMode>
);
