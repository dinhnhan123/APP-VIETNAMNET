import FeaturedArticle from "./FeaturedArticle";
import SubArticleItem from "./SubArticleItem";

const LawMain = () => {
  return (
    <div className="law-main">
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
export default LawMain;
