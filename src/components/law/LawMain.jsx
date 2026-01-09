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
            image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/14/phien-toa-xet-xu-vu-an-kinh-te-001.jpg?width=360"
            title="Xét xử vụ án kinh tế lớn, nhiều bị cáo đối mặt mức án nghiêm khắc"
            link="/phap-luat/xet-xu-vu-an-kinh-te"
          />

          <SubArticleItem
            image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/13/cong-an-dieu-tra-vu-an-hinh-su-002.jpg?width=360"
            title="Công an khởi tố, điều tra vụ việc có dấu hiệu vi phạm hình sự"
            link="/phap-luat/dieu-tra-vu-viec"
          />

          <SubArticleItem
            image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/13/luat-moi-co-hieu-luc-003.jpg?width=360"
            title="Nhiều quy định pháp luật mới chính thức có hiệu lực từ năm 2025"
            link="/phap-luat/luat-moi-2025"
          />

          <SubArticleItem
            image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/13/canh-bao-lua-dao-cong-nghe-cao-004.jpg?width=360"
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
