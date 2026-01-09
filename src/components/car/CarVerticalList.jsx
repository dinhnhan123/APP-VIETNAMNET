import { useState } from "react";
import CarVerticalItem from "./CarVerticalItem";
import "../../styles/car/carVerticalList.css";

const CarVerticalList = () => {
  const articles = [
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/15/bo-truong-dao-ngoc-dung-truong-du-bi-dai-hoc-la-mo-hinh-giao-duc-dac-thu-161.jpg?width=360&s=8frNVXqWL_eeqvynDCjZCg",
      category: "Ô TÔ",
      title: "Bộ trưởng Đào Ngọc Dung: Trường Dự bị Đại học là mô hình giáo dục đặc thù",
      desc: "“Trường Dự bị Đại học Dân tộc là mô hình giáo dục có tính chất đặc thù...",
      link: "/oto/truong-du-bi-dai-hoc"
    },
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/14/viet-nam-keu-goi-thai-lan-va-campuchia-khong-de-cang-thang-leo-thang-3552.jpg?width=360&s=c_2Lhb8tcmEtvVGiyUTFww",
      category: "XE MÁY",
      title: "Việt Nam kêu gọi Thái Lan và Campuchia không để căng thẳng leo thang",
      desc: "Bộ trưởng Ngoại giao Lê Hoài Trung kêu gọi Thái Lan và Campuchia kiềm chế...",
      link: "/xe-may/viet-nam-keu-goi"
    },
    // 👉 các item còn lại giữ nguyên, chỉ đổi category + link nếu cần
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
