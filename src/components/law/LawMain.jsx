import { Link } from "react-router-dom";
import FeaturedArticle from "../law/FeaturedArticle.jsx";
import SubArticleItem from "../law/SubArticleItem.jsx";
import LawThreeGrid from "../law/LawThreeGrid.jsx";
import LawVerticalList from "../law/LawVerticalList.jsx";
import NewsSection from "../law/NewsSection.jsx";

import {
  listDataNewsLaw,
  listDataNewsLaw2
} from "../../fakeApi.jsx";

// style
import "../../styles/law/lawThreeGrid.css";

const LawMain = () => {
  return (
    <div className="law-main">
      <div className="d-flex flex-wrap main-news">

        {/* LEFT: BÀI NỔI BẬT */}
        <div className="main-left">
          <Link
            to="/phap-luat/luat-moi-co-hieu-luc-2025"
            className="text-decoration-none text-dark"
          >
            <FeaturedArticle />
          </Link>
        </div>

        {/* RIGHT: BÀI PHỤ */}
        <div className="main-right">
          <SubArticleItem
            image="https://media.vneconomy.vn/images/upload/2024/06/17/img-4203.jpeg"
            title="Xét xử vụ án kinh tế lớn, nhiều bị cáo đối mặt mức án nghiêm khắc"
            link="/phap-luat/xet-xu-vu-an-kinh-te"
          />

          <SubArticleItem
            image="https://congan.hatinh.gov.vn/storage/photos/6965fc8a8ad8f.jpg"
            title="Công an khởi tố, điều tra vụ việc có dấu hiệu vi phạm hình sự"
            link="/phap-luat/dieu-tra-vu-viec"
          />

          <SubArticleItem
            image="https://cdn.thuvienphapluat.vn/uploads/tintuc/2024/11/16/08-luat-co-hieu-luc.png"
            title="Nhiều quy định pháp luật mới chính thức có hiệu lực từ năm 2025"
            link="/phap-luat/luat-moi-2025"
          />

          <SubArticleItem
            image="https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c80785c6505cd355135628a4932b3bfabb3fb05b08c5b9b1e2eb79f23028f0352fa016c5ac5506eb04363983ffaa6ff1d21ac4/toi-phamjpg-9340.png"
            title="Gia tăng các vụ lừa đảo công nghệ cao, người dân cần cảnh giác"
            link="/phap-luat/lua-dao-cong-nghe-cao"
          />
        </div>
      </div>

      <div className="mt-4">
        <LawThreeGrid />
      </div>

      <div className="mt-4">
        <LawVerticalList />
      </div>

      <div className="news-row mt-4">
        <NewsSection sections={listDataNewsLaw} />
        <NewsSection sections={listDataNewsLaw2} />
      </div>
    </div>
  );
};

export default LawMain;
