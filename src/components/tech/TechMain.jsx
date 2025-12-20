import FeaturedArticle from "./FeaturedArticle";
import SubArticleItem from "./SubArticleItem";

const TechMain = () => {
  return (
    <div className="tech-main">
      <div className="main-news">
        <div className="main-left">
          <FeaturedArticle />
        </div>
        <div className="main-right">
          <SubArticleItem />
          <SubArticleItem />
        </div>
      </div>
    </div>
  );
};
export default TechMain;
