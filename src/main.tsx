import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as BR } from "react-router-dom";
import { InMemoryCache, ApolloProvider, ApolloClient } from "@apollo/client";
import { Toaster } from "react-hot-toast";

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  cache: new InMemoryCache(),
  credentials: "include",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BR>
        <App />
        <Toaster />
      </BR>
    </ApolloProvider>
  </StrictMode>,
);
