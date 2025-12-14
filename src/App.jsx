import React from "react";
//component
import Navbar from "./components/Navbar";
import TopMenu from "./components/Topmenu";
import Footer from "./components/Footer";
//page
import CatPage from "./pages/CatPage";
import HomePage from "./pages/HomePage";
import PoliticsPage from "./pages/PoliticsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
    <Router>
      <Navbar />
      <TopMenu/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chinh-tri" element={<PoliticsPage />} />
        <Route path="/cat" element={<CatPage />} />
      </Routes>
       <Footer/>
    </Router>
     
    </div>
  )
}
export default App;