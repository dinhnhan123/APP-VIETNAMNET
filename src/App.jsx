import React from "react";
//component
import Navbar from "./components/Navbar";
import TopMenu from "./components/Topmenu";
import Footer from "./components/Footer";
//page
import CatPage from "./pages/CatPage";
import HomePage from "./pages/HomePage";
import Article from "./components/Article";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PoliticsPage from "./pages/PoliticsPage";
import NewsPage from "./pages/NewsPage";
import Business from "./pages/Business";
import EthnicityReligion from "./pages/EthnicityReligion";
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
        <Route path="/article" element={<Article />} />
        <Route path="/chinh-tri" element={<PoliticsPage />} />
        <Route path="/thoi-su" element={<NewsPage />} />
        <Route path="/kinh-doanh" element={<Business />} />
        <Route path="/dan-toc-va-ton-giao" element={<EthnicityReligion />} />
        <Route path="/cat" element={<CatPage />} />
        <Route path="/suc-khoe" element={<HealthPage />} />
        <Route path="/cong-nghe" element={<TechPage />} />
        <Route path="/phap-luat" element={<LawPage />} />
        <Route path="/xe" element={<CarPage />} />
        <Route path="/dang-nhap" element={<LoginPage />} />
        <Route path="/dang-ky" element={<RegisterPage />} />
      </Routes>
       <Footer/>
    </Router>
     
    </div>
  )
}
export default App;