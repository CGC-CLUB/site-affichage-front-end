import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as BR } from "react-router-dom";
import { InMemoryCache, ApolloProvider, ApolloClient } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BR>
        <App />
      </BR>
    </ApolloProvider>
  </StrictMode>,
);
