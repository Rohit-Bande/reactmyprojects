import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./index.css";

const App = () => {
  return(
    <>
    <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/service" Component={Service} />
        <Route exact path="/about" Component={About} />
        <Route path="*" element={<Navigate to='/service' />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App;
  