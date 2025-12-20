import TechMain from "../components/tech/TechMain.jsx";
import TechSidebar from "../components/tech/TechSidebar.jsx";
import "../styles/tech/index.css";

const TechPage = () => {
  return (
    <div className="container mt-3">
      <div className="d-flex flex-wrap tech-wrapper">
        <TechMain />
        <TechSidebar />
      </div>
    </div>
  );
};

export default TechPage;
