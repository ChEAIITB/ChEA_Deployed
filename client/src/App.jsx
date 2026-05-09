import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/contacts/Contact";
import Contact24 from "./components/contacts/Contact24";
import Contact23 from "./components/contacts/Contact23";
import Contact22 from "./components/contacts/Contact22";
import Contact21 from "./components/contacts/Contact21";
import Contact20 from "./components/contacts/Contact20";
import Register from "./components/Register";
import Login from "./components/Login";
import AOS from "aos";
import "aos/dist/aos.css";
import Facad24 from "./components/facads/Facad24";
import Facad23 from "./components/facads/Facad23";
import Facad22 from "./components/facads/Facad22";
import Facad21 from "./components/facads/Facad21";
import FacadMtech from "./components/facads/FacadMtech";
import FacadPhd from "./components/facads/FacadPhd";
import Link24 from "./components/links/Link24";
import Link25 from "./components/links/Link25";

import Publication from "./components/publications/Publication";
import ChemicalBackground from "./components/ChemicalBackground";
import Events from "./components/events/Events";
import CheaBlogs from "./components/cheablogs";
function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    if (token && name) {
      setUser({ name });
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/24" element={<Contact24 />} />
          <Route path="/contact/23" element={<Contact23 />} />
          <Route path="/contact/22" element={<Contact22 />} />
          <Route path="/contact/21" element={<Contact21 />} />
          <Route path="/contact/20" element={<Contact20 />} />
          <Route path="/facad/24" element={<Facad24 />} />
          <Route path="/facad/23" element={<Facad23 />} />
          <Route path="/facad/22" element={<Facad22 />} />
          <Route path="/facad/21" element={<Facad21 />} />
          <Route path="/facad/mtech" element={<FacadMtech />} />
          <Route path="/facad/phd" element={<FacadPhd />} />
          <Route path="/links/25" element={<Link25 />} />
          <Route path="/links/24" element={<Link24 />} />
          <Route path="/publications" element={<Publication />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blogs" element={<CheaBlogs />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
