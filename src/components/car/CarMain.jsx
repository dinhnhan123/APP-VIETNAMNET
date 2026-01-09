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
            image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/15/oto-dien-pin-lfp.jpg"
            title="Ô tô điện dùng pin LFP: Ưu nhược điểm người mua cần biết"
            link="/oto-xe-may/o-to-dien-pin-lfp"
          />

          <SubArticleItem
            image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/14/xe-hybrid-tiet-kiem-nhien-lieu.jpg"
            title="Xe hybrid có thật sự tiết kiệm xăng trong đô thị?"
            link="/oto-xe-may/xe-hybrid-tiet-kiem-xang"
          />

          <SubArticleItem
            image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/13/lai-xe-cao-toc.jpg"
            title="5 lỗi tài xế mới hay mắc khi chạy cao tốc"
            link="/oto-xe-may/loi-lai-xe-cao-toc"
          />

          <SubArticleItem
            image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/12/bao-duong-o-to.jpg"
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
