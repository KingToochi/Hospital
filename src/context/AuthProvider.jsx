// Got it — this code is creating a React Context to share authentication data (like user login state) across your app 
// without having to pass props down manually.

// Importing React's createContext (to create a context object) 
// and useState (to store and update state) from React
import { createContext, useState } from "react";

// Create a new context for authentication
// The empty object {} is the default value
const AuthContext = createContext({});

// Create a Context Provider component that will wrap parts of the app
// and give them access to auth-related state
export const AuthProvider = ({ children }) => {
    // Declare a state variable 'auth' to store authentication details (e.g., user info, tokens)
    // 'setAuth' is used to update the state
    const [auth, setAuth] = useState({});

    // The Provider makes 'auth' and 'setAuth' available to all children components
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children} {/* Render any child components passed inside AuthProvider */}
        </AuthContext.Provider>
    );
};

// Export the context so it can be used with useContext in other components
export default AuthContext;
