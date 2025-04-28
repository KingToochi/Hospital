import {Routes, Route} from 'react-router-dom';
import "font-awesome/css/font-awesome.min.css";
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import DepartmentSection from './components/DepartmentSection';
import NewBlog from './components/NewBlog';
import SingleBlog from './components/SingleBlog';
import Doctors from './components/Doctors';
import Contact from './components/Contact';

function App() {
  

  return(
    <div>
      <Routes>
        <Route path='/' element={< Layout />}>
          <Route index element={<Home />}/>
          <Route path='new-blog' element={<NewBlog />}/>
          <Route path='single-blog' element={<SingleBlog />}/>
          <Route path='about' element={<About />}/>
          <Route path='doctors' element={<Doctors />}/>
          <Route path='department' element={<DepartmentSection />} />
          <Route path='contact' element={<Contact />}/>
        </Route>
      </Routes>
    </div>
  
  )
  
}

export default App;