// this file is creating a custom React hook that makes it easier to use your AuthContext.
// Import useContext hook from React
// This hook lets you read the value from a context
import { useContext } from "react";

// Import the AuthContext we created in AuthProvider.jsx
import AuthContext from "../context/AuthProvider";

// Define a custom hook called useAuth
// This is just a wrapper around useContext(AuthContext)
// It returns whatever value is stored in AuthContext.Provider
const useAuth = () => {
    return useContext(AuthContext);
    // useContext(AuthContext) will give us:
    // { auth, setAuth } — because that's what we set as "value" in AuthProvider
}
 
// Export the custom hook so it can be reused easily in other components
export default useAuth;
