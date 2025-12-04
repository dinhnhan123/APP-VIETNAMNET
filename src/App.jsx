import React from "react";
import Navbar from "./components/Navbar";
import CatPage from "./pages/CatPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopMenu from "./components/Topmenu";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
    <Router>
      <Navbar />
      <TopMenu/>
      <Routes>
        <Route path="/cat" element={<CatPage />} />
      </Routes>
       <Footer/>
    </Router>
     
    </div>
  )
}
export default App;