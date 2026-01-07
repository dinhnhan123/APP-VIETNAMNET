import TechMain from "../components/tech/TechMain.jsx";
import TechSidebar from "../components/tech/TechSidebar.jsx";
import HighlightSection from "../components/tech/HighlightSection.jsx";
import "../styles/tech/index.css";

const TechPage = () => {
  return (
    <div className="container mt-3">
      <div className="d-flex flex-wrap tech-wrapper">
        <TechMain />
        <TechSidebar />

        <div className="mt-4">
          <HighlightSection />
        </div>
      </div>
    </div>
  );
};

export default TechPage;
