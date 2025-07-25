import { Routes, Route } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import DepartmentSection from "./components/DepartmentSection";
import NewBlog from "./components/NewBlog";
import SingleBlog from "./components/SingleBlog";
import Contact from "./components/Contact";
import Login from "./components/auth/Login";
import AdminLayout from "./components/admin/AdminLayout";
import Overview from "./components/admin/Overview";
import Page404 from "./components/auth/404";
import Unauthorized from "./components/Unathourized";
import RequiredAuth from "./components/auth/RequiredAuth";
import Doctors from "./components/admin/Doctor";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="new-blog" element={<NewBlog />} />
          <Route path="single-blog" element={<SingleBlog />} />
          <Route path="about" element={<About />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="department" element={<DepartmentSection />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route element={<RequiredAuth allowedRole={"Admin"} />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Overview />} />
            <Route path="doctors" element={<Doctors/>} />
          </Route>
        </Route>
        

        {/* catch all other route */}
        <Route path="Unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
