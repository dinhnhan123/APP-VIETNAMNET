import EthnicityReligionMain from "../components/ethnicityReligion/EthnicityReligionMain.jsx";
import EthnicityReligionSidebar from "../components/ethnicityReligion/EthnicityReligionSidebar.jsx";
import HighlightSection from "../components/ethnicityReligion/HighlightSection.jsx";
import { useEffect, useState } from "react";
import { fetchRSS } from "../api/rssService.js";
import "../styles/ethnicityReligion/index.css";
const EthnicityReligionPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchRSS("https://vietnamnet.vn/rss/dan-toc-ton-giao.rss")
      .then(data => setArticles(data || []))
      .catch(err => console.log("RSS ERROR:", err));
  }, []);
  if (!articles || articles.length === 0) {
    return (
      <div className="container">
        <p>Đang tải tin...</p>
      </div>
    );
  }
    const featured = articles[0];
    const subList = articles.slice(1, 5);
    const highlighList = articles.slice(5, 9);
    const gridList = articles.slice(9, 15);
    const hotList = articles.slice(15, 24);
    const verticalList = articles.slice(24);
  return (
    <div className="container mt-3">
      <div className="d-flex flex-wrap politics-wrapper">
        <EthnicityReligionMain 
          featured={featured}
          subList={subList}
          gridList={gridList}
          verticalList={verticalList}
        />
        <EthnicityReligionSidebar hotList={hotList}/>
        <div className="mt-4">
          <HighlightSection  highlights={highlighList}/>
        </div>
      </div>
    </div>
  );
};

export default EthnicityReligionPage;
