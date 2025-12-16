import PoliticsMain from "../components/politics/PoliticsMain.jsx";
import PoliticsSidebar from "../components/politics/PoliticsSidebar.jsx";
import HighlightSection from "../components/politics/HighlightSection.jsx";
import {
  listDataNewsPolitics

} from "../fakeApi.jsx";
import "../styles/politics/index.css"
const PoliticsPage = () => {
  return (
    <div className="container mt-3">
      <div className="d-flex flex-wrap politics-wrapper">
        <PoliticsMain />
        <PoliticsSidebar />
         <div className="mt-4">
                <HighlightSection/>
            </div>
      </div>
    </div>
  );
};

export default PoliticsPage;
