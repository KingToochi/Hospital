import { Outlet } from "react-router-dom"
import SideBar from "./Sidebar";
import Headline from "./Headline";
import Head from "./Head";
import Footer from "../Footer";
const AdminLayout = () => {
    return (
        <div>
            <div className="grid grid-cols-[20%_80%] min-h-screen">
            {/* Sidebar - 20% */}
            <div className="bg-gray-100 p-4">
                <SideBar />
            </div>

        {/* Main Content - 80% */}
            <div className="flex flex-col">
                <Head />
                <Headline />
                {/* <Section /> */}
                <Outlet />
            </div>

        {/* Footer - Full width (span both columns) */}
            <div className="col-span-2 bg-gray-200 p-4">
                {/* <Footer /> */}
            </div>
        </div>
        </div>
      );
}
 
export default AdminLayout;