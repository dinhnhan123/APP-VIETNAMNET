import { useState } from "react";
import TechVerticalItem from "./TechVerticalItem";
import "../../styles/tech/techVerticalList.css";

const TechVerticalList = () => {
  const articles = [
    {
      image: "https://nghiencuuchienluoc.org/wp-content/uploads/2025/05/US-China-AI-race-scaled-1-750x375.jpg",
      category: "CÔNG NGHỆ",
      title: "Cuộc đua chip AI toàn cầu bước vào giai đoạn khốc liệt",
      desc: "Các hãng công nghệ lớn liên tục ra mắt thế hệ chip AI mới nhằm tối ưu hiệu năng và tiết kiệm năng lượng.",
      link: "/cong-nghe/chip-ai"
    },
    {
      image: "https://cdn2.tuoitre.vn/471584752817336320/2023/12/12/tan-cong-mang-quang-cao-co-bac-ncs-2023-12-12-17023672462521227219428.png",
      category: "AN NINH MẠNG",
      title: "Gia tăng tấn công mạng nhắm vào doanh nghiệp Việt",
      desc: "Chuyên gia khuyến cáo doanh nghiệp cần nâng cấp hệ thống bảo mật và đào tạo nhân sự về an toàn thông tin.",
      link: "/cong-nghe/an-ninh-mang"
    },
    {
      image: "https://genk.mediacdn.vn/zoom/700_438/139269124445442048/2025/12/21/avatar1766342945272-17663429472201719409395-0-0-637-1019-crop-1766343001459466277988.jpg",
      category: "THIẾT BỊ",
      title: "Xu hướng smartphone 2025: AI on-device lên ngôi",
      desc: "Các mẫu điện thoại mới tập trung mạnh vào xử lý AI trực tiếp trên thiết bị thay vì phụ thuộc đám mây.",
      link: "/cong-nghe/smartphone-2025"
    },
    {
      image: "https://thanhnien.mediacdn.vn/Uploaded/tamkc/2022_05_18/bitcoin-7856.jpg",
      category: "BLOCKCHAIN",
      title: "Blockchain không còn là câu chuyện của tiền số",
      desc: "Công nghệ blockchain đang được ứng dụng mạnh mẽ trong logistics, y tế và quản lý dữ liệu.",
      link: "/cong-nghe/blockchain-ung-dung"
    }
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
    <div className="tech-vertical-list">

      {/* LIST */}
      {currentArticles.map((item, index) => (
        <TechVerticalItem key={index} {...item} />
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

export default TechVerticalList;
