import React from 'react';
import * as ReactDOM from "react-dom/client";
import App from './App';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const rootNode = document.getElementById('root');
const queryClient = new QueryClient();

ReactDOM.createRoot(rootNode).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);