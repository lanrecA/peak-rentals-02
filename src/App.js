import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Equipment from "./pages/Equipment";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9">
            <Routes>
              <Route path="/" element= {<Home />} />
              <Route path="/about" element= {<AboutUs />} />
              <Route path="/equipment" element={<Equipment /> }/>
              <Route path="/contact-us" element={<ContactUs /> }/>
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
