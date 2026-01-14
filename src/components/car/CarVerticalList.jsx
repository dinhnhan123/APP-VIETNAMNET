import { useState } from "react";
import CarVerticalItem from "./CarVerticalItem";
import "../../styles/car/carVerticalList.css";

const CarVerticalList = () => {
  const articles = [
    {
      image: "https://images2.thanhnien.vn/zoom/1200_630/528068263637045248/2024/10/14/edit-accent-17170845821621656827165-33-7-669-1221-crop-17288666354782018319687.jpeg",
      category: "Ô TÔ",
      title: "Mẫu sedan hạng B mới ra mắt, giá dự kiến dưới 600 triệu đồng",
      desc: "Mẫu sedan hạng B sở hữu thiết kế hiện đại, trang bị nhiều công nghệ an toàn và hứa hẹn cạnh tranh mạnh trong phân khúc.",
      link: "/oto/sedan-hang-b-moi"
    },
    {
      image: "https://www.winauto.vn/wp-content/uploads/2024/12/tai-sao-xe-may-dien-ngay-cang-duoc-ua-chuong-tai-viet-nam-2.jpg",
      category: "XE MÁY",
      title: "Xe máy điện ngày càng được ưa chuộng tại đô thị lớn",
      desc: "Nhờ chi phí vận hành thấp và thân thiện môi trường, xe máy điện đang trở thành lựa chọn phổ biến của người dân thành phố.",
      link: "/xe-may/xe-dien-do-thi"
    },
  ];

  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentArticles = articles.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="car-vertical-list">

      {/* LIST */}
      {currentArticles.map((item, index) => (
        <CarVerticalItem key={index} {...item} />
      ))}

      {/* PAGINATION */}
      <div className="pagination mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
        >
          ‹
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => prev + 1)}
        >
          ›
        </button>
      </div>

    </div>
  );
};

export default CarVerticalList;
