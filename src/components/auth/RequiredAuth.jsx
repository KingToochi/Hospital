// Import the AuthContext object we created in "../../context/AuthProvider"
// This will allow us to access authentication data anywhere in the app
import AuthContext from "../../context/AuthProvider";

// useContext is a React hook that lets us read data from a Context object
import { useContext } from "react";

// useLocation lets us get the current URL location (path, query, state, etc.)
// Navigate is used for programmatically redirecting to another route
// Outlet is used to render nested routes inside this component
import { useLocation, Navigate, Outlet } from "react-router-dom";

// Component that restricts access to certain routes based on the user's role
const RequiredAuth = ({ allowedRole }) => {
    
    // Get the authentication data from AuthContext
    // "auth" could contain user details like name, role, token, etc.
    const { auth } = useContext(AuthContext);
    
    // Get the current location (helps in redirecting back after login)
    const location = useLocation();

    // Decide what to render based on user authentication and role
    return (  
        // ✅ If user has a role that matches the allowedRole, show the nested route (Outlet)
        auth?.role?.includes(allowedRole) ? (
            <Outlet />
        ) 
        // 🚫 If user is logged in (auth.user exists) but not authorized, go to "Unauthorized" page
        : auth?.user ? (
            <Navigate to="/Unathorized" state={{ from: location }} replace />
        ) 
        // 🔒 If user is not logged in at all, redirect to login page
        : (
            <Navigate to="/login" state={{ from: location }} replace />
        )
    );
}

// Export the RequiredAuth component so it can be used in route protection
export default RequiredAuth;
