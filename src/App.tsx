
import "./App.css";
import React from "react";
import { Routes, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./utilities/AuthContext";
import routes from "./routes";

const router = createBrowserRouter(routes);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;