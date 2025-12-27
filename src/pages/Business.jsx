import BusinessMain from "../components/business/BusinessMain.jsx";
import BusinessSidebar from "../components/business/BusinessSidebar.jsx";
import HighlightSection from "../components/business/HighlightSection.jsx";
import "../styles/business/index.css";
const BusinessPage = () => {
  return (
    <div className="container mt-3">
      <div className="d-flex flex-wrap politics-wrapper">
        <BusinessMain />
        <BusinessSidebar />
         <div className="mt-4">
                <HighlightSection/>
            </div>
      </div>
    </div>
  );
};

export default BusinessPage;
