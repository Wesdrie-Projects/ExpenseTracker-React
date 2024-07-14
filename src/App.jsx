import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./feature/home";
import { LoginPage } from "./feature/authentication";
import { Secret } from "./feature/authentication/Secert";
import { AuthProvider } from "./feature/authentication/useAuth";
import { ProtectedRoute } from "./feature/authentication/routes";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/secret"
          element={
            <ProtectedRoute>
              <Secret />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;