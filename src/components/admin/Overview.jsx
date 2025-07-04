import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import SideBar from "./Sidebar";
import Head from "./Head";
import Section from "./Section";
import Headline from "./Headline";
import Footer from "../Footer";
const Overview = () => {
    const {auth} = useContext(AuthContext);
    console.log(auth);

    return (
  <div className="grid grid-cols-[20%_80%] min-h-screen">
    {/* Sidebar - 20% */}
    <div className="bg-gray-100 p-4">
      <SideBar />
    </div>

    {/* Main Content - 80% */}
    <div className="flex flex-col">
      <Head />
      <Headline />
      <Section />
    </div>

    {/* Footer - Full width (span both columns) */}
    <div className="col-span-2 bg-gray-200 p-4">
      <Footer />
    </div>
  </div>
);

}
 
export default Overview;

