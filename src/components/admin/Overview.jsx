import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import SideBar from "./Sidebar";
import Head from "./Head";
import Section from "./Section";
const Overview = () => {
    const {auth} = useContext(AuthContext);
    console.log(auth);
    return (
        <div className="grid grid-flow-col grid-rows-3">
          <div className="row-span-3 w-{20%}"><SideBar /></div>
          <div className="flex flex-col">
                <Head />
                <Section />
            </div>
          
          
          
        </div>
      );
}
 
export default Overview;

