import LawMain from "../components/law/LawMain.jsx";
import LawSidebar from "../components/law/LawSidebar.jsx";
import "../styles/law/index.css";

const LawPage = () => {
  return (
    <div className="container mt-3">
      <div className="d-flex flex-wrap law-wrapper">
        <LawMain />
        <LawSidebar />
      </div>
    </div>
  );
};

export default LawPage;
