import NewMain from "../components/news/NewMain.jsx";
import NewSidebar from "../components/news/NewSidebar.jsx";
import HighlightSection from "../components/news/HighlightSection.jsx";
import "../styles/news/index.css";
const NewsPage = () => {
  return (
    <div className="container mt-3">
      <div className="d-flex flex-wrap politics-wrapper">
        <NewMain />
        <NewSidebar />
         <div className="mt-4">
                <HighlightSection/>
            </div>
      </div>
    </div>
  );
};

export default NewsPage;
