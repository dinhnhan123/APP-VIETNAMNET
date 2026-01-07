import { Link } from "react-router-dom";
import FeaturedArticle from "./FeaturedArticle";
import SubArticleItem from "./SubArticleItem";
import TechThreeGrid from "./TechThreeGrid";
import TechVerticalList from "./TechVerticalList";
import NewsSection from "./NewsSection";
import {
  listDataNewsTech,
  listDataNewsTech2
} from "../../fakeApi.jsx";

import "../../styles/tech/techThreeGrid.css";

const TechMain = () => {
  return (
    <div className="tech-main">
      <div className="d-flex flex-wrap main-news">

        {/* LEFT */}
        <div className="main-left">
          <Link
            to="/cong-nghe/ai-chau-au"
            className="text-decoration-none text-dark"
          >
            <FeaturedArticle />
          </Link>
        </div>

        {/* RIGHT */}
        <div className="main-right">
          <SubArticleItem
            image="https://static-images.vnncdn.net/files/publish/2023/8/ai-vietnam.jpg"
            title="AI đang thay đổi cách doanh nghiệp Việt vận hành"
            link="/cong-nghe/ai-doanh-nghiep"
          />

          <SubArticleItem
            image="https://static-images.vnncdn.net/files/publish/2023/9/startup.jpg"
            title="Startup công nghệ Việt hút vốn ngoại"
            link="/cong-nghe/startup"
          />

          <SubArticleItem
            image="https://static-images.vnncdn.net/files/publish/2023/7/chip.jpg"
            title="Việt Nam bước vào chuỗi cung ứng chip toàn cầu"
            link="/cong-nghe/chip"
          />
        </div>
      </div>

      <div className="mt-4">
        <TechThreeGrid />
      </div>

      <div className="mt-4">
        <TechVerticalList />
      </div>

      <div className="news-row mt-4">
        <NewsSection sections={listDataNewsTech} />
        <NewsSection sections={listDataNewsTech2} />
      </div>
    </div>
  );
};

export default TechMain;
