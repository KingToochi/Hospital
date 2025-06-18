import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
const Overview = () => {
    const {auth} = useContext(AuthContext);
    console.log(auth);
    return (
        <div>
            Admin works
        </div>
      );
}
 
export default Overview;