import { Outlet } from "react-router-dom"
import SideBar from "./Sidebar";
import Footer from "../Footer";
const AdminLayout = () => {
    return (
        <div
        className="flex flex-col 
        lg:flex-row"
        >
            <div
            className="w-full fixed bottom-0 right-0 left-0
            lg:w-[3%] lg:relative"
            >
                <SideBar />
            </div>
            
            <div
            className="w-full
            lg:w-[97%]"
            >
                <Outlet />
            </div>
            
        </div>
      );
}
 
export default AdminLayout;