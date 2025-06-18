  import AuthContext from "../../context/AuthProvider";
import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
const RequiredAuth = ({allowedRole}) => {
    const {auth} = useContext(AuthContext);
    const location = useLocation();
    return (  
       auth?.role?.includes(allowedRole) ? (
        <Outlet />
       )
       :
       auth?.user ?
            <Navigate to="/Unathorized" state={{from: location}} replace />
            :
            <Navigate to="/login" state={{from: location}} replace />
    );
}
 
export default RequiredAuth;