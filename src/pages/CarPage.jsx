import CarMain from "../components/car/CarMain.jsx";
import CarSidebar from "../components/car/CarSidebar.jsx";
import "../styles/car/index.css";

const CarPage = () => {
  return (
    <div className="container mt-3">
      <div className="d-flex flex-wrap car-wrapper">
        <CarMain />
        <CarSidebar />
      </div>
    </div>
  );
};

export default CarPage;