import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = document.cookie.includes("uid"); // Ensure session exists

    return isAuthenticated ? children : <Navigate to="/auth/login" />;
};

export default ProtectedRoute;