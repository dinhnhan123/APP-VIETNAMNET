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
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWYNf9QSNrOjhYZplh7edPbyX1_dg0-QpItg&s"
            title="Khám sức khỏe định kỳ giúp phát hiện sớm nhiều bệnh nguy hiểm"
            link="/suc-khoe/kham-suc-khoe"
          />

          <SubArticleItem
            image="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/5/13/giao-mua7-168396358011518786292.png"
            title="Chuyên gia khuyến cáo 5 thói quen ăn uống giúp tăng cường đề kháng"
            link="/suc-khoe/an-uong-lanh-manh"
          />

          <SubArticleItem
            image="https://suckhoedoisong.qltns.mediacdn.vn/zoom/600_315/Images/bichvan/2019/01/26/loi-ich-cua-viec-tap-the-duc-30-phut-moi-ngay1548520562.jpg"
            title="Tập thể dục 30 phút mỗi ngày mang lại lợi ích gì cho sức khỏe?"
            link="/suc-khoe/tap-the-duc"
          />

          <SubArticleItem
            image="https://file.hstatic.net/200000288983/file/cham-soc-suc-khoe-tinh-than-1_ef7112f42b9c49c299514927367027e7_grande.png"
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
