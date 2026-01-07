import { Link } from "react-router-dom";
import FeaturedArticle from "../health/FeaturedArticle.jsx";
import SubArticleItem from "../health/SubArticleItem.jsx";
import HealthThreeGrid from "../health/HealthThreeGrid.jsx";
import HealthVerticalList from "../health/HealthVerticalList.jsx";
import NewsSection from "../health/NewsSection.jsx";
import {
  listDataNewsHealth,
  listDataNewsHealth2
} from "../../fakeApi.jsx";

// style
import "../../styles/health/healthThreeGrid.css";

const HealthMain = () => {
  return (
    <div className="health-main">
      <div className="d-flex flex-wrap main-news">

        {/* LEFT: BÀI NỔI BẬT */}
        <div className="main-left">
          <Link
            to="/suc-khoe/kham-suc-khoe-dinh-ky"
            className="text-decoration-none text-dark"
          >
            <FeaturedArticle />
          </Link>
        </div>

        {/* RIGHT: BÀI PHỤ */}
        <div className="main-right">

          <SubArticleItem
            image="https://static-images.vnncdn.net/files/publish/2023/9/7/kham-suc-khoe-dinh-ky-2163.jpg"
            title="Khám sức khỏe định kỳ giúp phát hiện sớm nhiều bệnh nguy hiểm"
            link="/suc-khoe/kham-suc-khoe"
          />

          <SubArticleItem
            image="https://static-images.vnncdn.net/files/publish/2023/8/1/an-uong-lanh-manh-1234.jpg"
            title="Chuyên gia khuyến cáo 5 thói quen ăn uống giúp tăng cường đề kháng"
            link="/suc-khoe/an-uong-lanh-manh"
          />

          <SubArticleItem
            image="https://static-images.vnncdn.net/files/publish/2023/7/20/tap-the-duc-moi-ngay-8899.jpg"
            title="Tập thể dục 30 phút mỗi ngày mang lại lợi ích gì cho sức khỏe?"
            link="/suc-khoe/tap-the-duc"
          />

          <SubArticleItem
            image="https://static-images.vnncdn.net/files/publish/2023/6/15/suc-khoe-tinh-than-4455.jpg"
            title="Chăm sóc sức khỏe tinh thần trong cuộc sống hiện đại"
            link="/suc-khoe/suc-khoe-tinh-than"
          />
        </div>
      </div>

      <div className="mt-4">
        <HealthThreeGrid />
      </div>

      <div className="mt-4">
        <HealthVerticalList />
      </div>

      <div className="news-row mt-4">
        <NewsSection sections={listDataNewsHealth} />
        <NewsSection sections={listDataNewsHealth2} />
      </div>
    </div>
  );
};

export default HealthMain;
