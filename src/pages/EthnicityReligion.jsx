import EthnicityReligionMain from "../components/ethnicityReligion/EthnicityReligionMain.jsx";
import EthnicityReligionSidebar from "../components/ethnicityReligion/EthnicityReligionSidebar.jsx";
import HighlightSection from "../components/ethnicityReligion/HighlightSection.jsx";
import "../styles/ethnicityReligion/index.css";
const EthnicityReligionPage = () => {
  return (
    <div className="container mt-3">
      <div className="d-flex flex-wrap politics-wrapper">
        <EthnicityReligionMain />
        <EthnicityReligionSidebar />
         <div className="mt-4">
                <HighlightSection/>
            </div>
      </div>
    </div>
  );
};

export default EthnicityReligionPage;
