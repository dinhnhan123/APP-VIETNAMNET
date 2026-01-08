import NewMain from "../components/news/NewMain.jsx";
import NewSidebar from "../components/news/NewSidebar.jsx";
import HighlightSection from "../components/news/HighlightSection.jsx";
import { useEffect, useState } from "react";
import { fetchRSS } from "../api/rssService.js";
import "../styles/news/index.css";
const NewsPage = () => {
   const [articles, setArticles] = useState([]);
    
      useEffect(() => {
        fetchRSS("https://vietnamnet.vn/rss/thoi-su.rss")
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
    const eventList = articles.slice(24 , 28);
    const verticalList = articles.slice(28);
  return (
    <div className="container mt-3">
      <div className="d-flex flex-wrap politics-wrapper">
        <NewMain 
         featured={featured}
          subList={subList}
          gridList={gridList}
          verticalList={verticalList}
          />
        <NewSidebar hotList={hotList} eventList={eventList} />
         <div className="mt-4">
                <HighlightSection highlights={highlighList} />
            </div>
      </div>
    </div>
  );
};

export default NewsPage;
