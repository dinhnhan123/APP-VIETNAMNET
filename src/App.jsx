import React from "react";
//component
import Navbar from "./components/Navbar";
import TopMenu from "./components/Topmenu";
import Footer from "./components/Footer";
//page
import CatPage from "./pages/CatPage";
import HomePage from "./pages/HomePage";
import PoliticsPage from "./pages/PoliticsPage";
import NewsPage from "./pages/NewsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HealthPage from "./pages/HealthPage";
import TechPage from "./pages/TechPage";
import LawPage from "./pages/LawPage";
import CarPage from "./pages/CarPage";

const App = () => {
  return (
    <div>
    <Router>
      <Navbar />
      <TopMenu/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chinh-tri" element={<PoliticsPage />} />
        <Route path="/thoi-su" element={<NewsPage />} />
        <Route path="/cat" element={<CatPage />} />
        <Route path="/suc-khoe" element={<HealthPage />} />
        <Route path="/cong-nghe" element={<TechPage />} />
        <Route path="/phap-luat" element={<LawPage />} />
        <Route path="/xe" element={<CarPage />} />
      </Routes>
       <Footer/>
    </Router>
     
    </div>
  )
}
export default App;