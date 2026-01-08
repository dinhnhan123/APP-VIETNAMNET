
import { Link } from "react-router-dom";
import FeaturedArticle from "./FeaturedArticle";
import SubArticleItem from "./SubArticleItem";
import BusinessThreeGrid from "./BusinessThreeGrid";
import BusinessVerticalList from "./BusinessVerticalList";
import BusinessSection from "./BusinessSection";

import "../../styles/business/businessSection.css";

const BusinessMain = ({ featured, subList, gridList, verticalList }) => {
  return (
    <div className="politics-main">
      <div className="d-flex flex-wrap main-news">

        {/* LEFT: BÀI NỔI BẬT */}
        <div className="main-left">
          {featured && (
            <Link  to={`/article?url=${encodeURIComponent(featured.link)}&title=${encodeURIComponent(featured.title)}`} className="text-decoration-none text-dark">
              <FeaturedArticle data={featured} />
            </Link>
          )}
        </div>

        {/* RIGHT: BÀI PHỤ */}
        <div className="main-right">
          {subList.map(item => (
            <SubArticleItem
              key={item.id}
              image={item.image}
              title={item.title}
              link={item.link}
            />
          ))}
        </div>
      </div>

      <div className="mt-4">
        <BusinessThreeGrid data={gridList} />
      </div>

      <div className="mt-4">
        <BusinessVerticalList data={verticalList} />
      </div>

      <div className="news-row mt-4">
        <BusinessSection sections={gridList} />
        <BusinessSection sections={verticalList} />
      </div>
    </div>
  );
};

export default BusinessMain;
