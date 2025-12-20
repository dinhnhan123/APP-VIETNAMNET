import FeaturedArticle from "./FeaturedArticle";
import SubArticleItem from "./SubArticleItem";

const HealthMain = () => {
  return (
    <div className="health-main">
      <div className="main-news">
        {/* BÀI LỚN */}
        <div className="main-left">
          <FeaturedArticle />
        </div>

        {/* BÀI NHỎ */}
        <div className="main-right">
          <SubArticleItem />
          <SubArticleItem />
        </div>
      </div>
    </div>
  );
};

export default HealthMain;
