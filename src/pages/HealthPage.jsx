import HealthMain from "../components/health/HealthMain.jsx";
import HealthSidebar from "../components/health/HealthSidebar.jsx";
import "../styles/health/index.css";

const HealthPage = () => {
  return (
    <div className="container mt-3">
      <div className="d-flex flex-wrap health-wrapper">
        <HealthMain />
        <HealthSidebar />
      </div>
    </div>
  );
};

export default HealthPage;