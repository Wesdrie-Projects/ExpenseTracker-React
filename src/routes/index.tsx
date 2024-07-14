import  React from "react";
import { Login } from "../feature/authentication";
import { Accounts } from "../feature/accounts";
import { ProtectedRoute } from "../utilities/ProtectedRoute";
import { Transactions } from "../feature/transactions";
import { Categories } from "../feature/categories";

export const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Accounts />
      </ProtectedRoute>
    ),
  },
  {
    path: "/transactions",
    element: (
      <ProtectedRoute>
        <Transactions />
      </ProtectedRoute>
    ),
  },
  {
    path: "/categories",
    element: (
      <ProtectedRoute>
        <Categories />
      </ProtectedRoute>
    ),
  },
]

export default routes;