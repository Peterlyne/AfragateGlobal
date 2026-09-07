import {Routes,Route} from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Jobs from "../pages/Jobs/Jobs";
import Scholarships from "../pages/Scholarships/Scholarships";
import Internships from "../pages/Internships/Internships";
import Businesses from "../pages/Businesses/Businesses";
import NGOs from "../pages/NGOs/NGOs";
import Resources from "../pages/Resources/Resources";
import Events from "../pages/Events/Events";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import Dashboard from "../pages/Dashboard/Dashboard";

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/jobs" element={<Jobs/>}/>
            <Route path="/scholarships" element={<Scholarships/>}/>
            <Route path="/internships" element={<Internships/>}/>
            <Route path="/businesses" element={<Businesses/>}/>
            <Route path="/ngos" element={<NGOs/>}/>
            <Route path="/resources" element={<Resources/>}/>
            <Route path="/events" element={<Events/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/*" element={<NotFound/>}/>
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}
export default AppRoutes;