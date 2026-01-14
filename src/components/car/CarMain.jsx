import { Link } from "react-router-dom";
import FeaturedArticle from "../car/FeaturedArticle.jsx";
import SubArticleItem from "../car/SubArticleItem.jsx";
import CarThreeGrid from "../car/CarThreeGrid.jsx";
import CarVerticalList from "../car/CarVerticalList.jsx";
import NewsSection from "../car/NewsSection.jsx";

import {
  listDataNewsCar,
  listDataNewsCar2
} from "../../fakeApi.jsx";

// style
import "../../styles/car/carThreeGrid.css";

const CarMain = () => {
  return (
    <div className="car-main">
      <div className="d-flex flex-wrap main-news">

        {/* LEFT: BÀI NỔI BẬT */}
        <div className="main-left">
          <Link
            to="/oto-xe-may/oto-dien-2025"
            className="text-decoration-none text-dark"
          >
            <FeaturedArticle />
          </Link>
        </div>

        {/* RIGHT: BÀI PHỤ */}
        <div className="main-right">
          <SubArticleItem
            image="https://lidinco.com/storage/posts/thu-nghiem-pin-sac-xe-dien-1.jpg"
            title="Ô tô điện dùng pin LFP: Ưu nhược điểm người mua cần biết"
            link="/oto-xe-may/o-to-dien-pin-lfp"
          />

          <SubArticleItem
            image="https://cdn-img.thethao247.vn/storage/files/huongsoo96/2025/04/22/13-68073e0d92cfa.jpg"
            title="Xe hybrid có thật sự tiết kiệm xăng trong đô thị?"
            link="/oto-xe-may/xe-hybrid-tiet-kiem-xang"
          />

          <SubArticleItem
            image="https://static-images.vnncdn.net/files/publish/2024/2/12/5-loi-tai-xe-viet-hay-mac-phai-tren-duong-cao-toc-va-muc-phat-380.png?width=0&s=FNOvgcpaUS1WOInvkN1deQ"
            title="5 lỗi tài xế mới hay mắc khi chạy cao tốc"
            link="/oto-xe-may/loi-lai-xe-cao-toc"
          />

          <SubArticleItem
            image="https://cafebiz.cafebizcdn.vn/thumb_w/600/162123310254002176/2024/11/28/photo1732758405103-1732758405299692567532-173276776373575119156.png"
            title="Bao lâu nên bảo dưỡng ô tô định kỳ?"
            link="/oto-xe-may/bao-duong-o-to"
          />
        </div>
      </div>

      <div className="mt-4">
        <CarThreeGrid />
      </div>

      <div className="mt-4">
        <CarVerticalList />
      </div>

      <div className="news-row mt-4">
        <NewsSection sections={listDataNewsCar} />
        <NewsSection sections={listDataNewsCar2} />
      </div>
    </div>
  );
};

export default CarMain;
