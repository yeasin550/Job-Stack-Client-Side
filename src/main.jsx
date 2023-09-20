import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./Routes/Routes";
import AuthProvider from "./Providers/AuthProvider";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
);
