import BusinessMain from "../components/business/BusinessMain.jsx";
import BusinessSidebar from "../components/business/BusinessSidebar.jsx";
import HighlightSection from "../components/business/HighlightSection.jsx";
import { useEffect, useState } from "react";
import { fetchRSS } from "../api/rssService.js";
import "../styles/business/index.css";
const BusinessPage = () => {
  const [articles, setArticles] = useState([]);
  
    useEffect(() => {
      fetchRSS("https://vietnamnet.vn/rss/kinh-doanh.rss")
        .then(data => setArticles(data || []))
        .catch(err => console.log("RSS ERROR:", err));
    }, []);
  
    if (!articles || articles.length < 5) return <p>Đang tải tin...</p>;

    const withImage = articles.filter(a => a.image && a.image !== "");
    const noImage = articles.filter(a => !a.image || a.image === "");
    const sortedArticles = [...withImage, ...noImage];
  
    const featured = sortedArticles[0];
    const subList = sortedArticles.slice(1, 5);
    const highlighList = sortedArticles.slice(5, 9);
    const gridList = sortedArticles.slice(5, 11);
    const verticalList = sortedArticles.slice(11, 18);
  return (
    <div className="container mt-3">
      <div className="d-flex flex-wrap politics-wrapper">
        <BusinessMain
          featured={featured}
          subList={subList}
          gridList={gridList}
          verticalList={verticalList}
        />
        <BusinessSidebar hotList={subList}/>
         <div className="mt-4">
                <HighlightSection highlights={highlighList}/>
            </div>
      </div>
    </div>
  );
};

export default BusinessPage;
