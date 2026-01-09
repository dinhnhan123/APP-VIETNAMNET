import LawMain from "../components/law/LawMain.jsx";
import LawSidebar from "../components/law/LawSidebar.jsx";
import HighlightSection from "../components/law/HighlightSection.jsx";
import "../styles/law/index.css";

const LawPage = () => {
  return (
    <div className="container mt-3">
      <div className="d-flex flex-wrap politics-wrapper">
        <LawMain />
        <LawSidebar />

        <div className="mt-4">
          <HighlightSection />
        </div>
      </div>
    </div>
  );
};

export default LawPage;
