import { Link } from "react-router-dom";
import FeaturedArticle from "../tech/FeaturedArticle.jsx";
import SubArticleItem from "../tech/SubArticleItem.jsx";
import TechThreeGrid from "../tech/TechThreeGrid.jsx";
import TechVerticalList from "../tech/TechVerticalList.jsx";
import NewsSection from "../tech/NewsSection.jsx";

import {
  listDataNewsTech,
  listDataNewsTech2
} from "../../fakeApi.jsx";

// style
import "../../styles/tech/techThreeGrid.css";

const TechMain = () => {
  return (
    <div className="tech-main">
      <div className="d-flex flex-wrap main-news">

        {/* LEFT: BÀI NỔI BẬT */}
        <div className="main-left">
          <Link
            to="/cong-nghe/cuoc-dua-ai"
            className="text-decoration-none text-dark"
          >
            <FeaturedArticle />
          </Link>
        </div>

        {/* RIGHT: BÀI PHỤ */}
        <div className="main-right">

          <SubArticleItem
            image="https://bcp.cdnchinhphu.vn/334894974524682240/2025/8/23/chip1-17559431562601651965020.jpg"
            title="Cuộc đua AI và chip bán dẫn đang làm thay đổi ngành công nghệ"
            link="/cong-nghe/ai-chip"
          />

          <SubArticleItem
            image="https://media.sohuutritue.net.vn/files/phamtuan/2025/10/19/ai-0649.jpg"
            title="Smartphone tích hợp AI on-device: Xu hướng công nghệ năm 2025"
            link="/cong-nghe/smartphone-ai"
          />

          <SubArticleItem
            image="https://cdn-images.vtv.vn/zoom/700_438/2022/4/15/3532chuyen-gia-du-bao-5-xu-huong-tan-cong-mang-noi-bat-trong-nam-2021-164999493192991497660-crop-1672473824055116212852.jpg"
            title="Gia tăng tấn công mạng: Người dùng cần làm gì để tự bảo vệ?"
            link="/cong-nghe/an-ninh-mang"
          />

          <SubArticleItem
            image="https://ictv.1cdn.vn/2024/11/28/khcn_20241014063050.jpg"
            title="Thiết bị IoT bùng nổ nhưng tiềm ẩn nhiều rủi ro bảo mật"
            link="/cong-nghe/iot-bao-mat"
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
