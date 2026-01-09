import CarMain from "../components/car/CarMain.jsx";
import CarSidebar from "../components/car/CarSidebar.jsx";
import HighlightSection from "../components/car/HighlightSection.jsx";
import "../styles/car/index.css";

const CarPage = () => {
  return (
    <div className="container mt-3">
      <div className="d-flex flex-wrap car-wrapper">
        <CarMain />
        <CarSidebar />

        <div className="mt-4">
          <HighlightSection />
        </div>
      </div>
    </div>
  );
};

export default CarPage;
