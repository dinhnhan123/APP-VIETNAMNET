import PoliticsMain from "../components/politics/PoliticsMain.jsx";
import PoliticsSidebar from "../components/politics/PoliticsSidebar.jsx";
import "../styles/politics/index.css"

const PoliticsPage = () => {
  return (
    <div className="container mt-3">
      <div className="d-flex flex-wrap politics-wrapper">
        <PoliticsMain />
        <PoliticsSidebar />
      </div>
    </div>
  );
};

export default PoliticsPage;
