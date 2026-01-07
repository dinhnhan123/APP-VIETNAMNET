import { useState } from "react";
import TechVerticalItem from "./TechVerticalItem";
import "../../styles/tech/techVerticalList.css";

const TechVerticalList = () => {
  const articles = [
    {
      image: "https://static-images.vnncdn.net/files/publish/2023/ai.jpg",
      category: "AI",
      title: "AI tạo sinh bùng nổ tại Việt Nam",
      desc: "Nhiều doanh nghiệp Việt đã ứng dụng AI vào vận hành và sản xuất",
      link: "/cong-nghe/ai-tao-sinh"
    },
    {
      image: "https://static-images.vnncdn.net/files/publish/2023/startup.jpg",
      category: "STARTUP",
      title: "Startup công nghệ Việt tăng trưởng mạnh",
      desc: "Nhiều startup gọi vốn thành công dù thị trường khó khăn",
      link: "/cong-nghe/startup"
    }
  ];

  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentArticles = articles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="politics-vertical-list">
      {currentArticles.map((item, index) => (
        <TechVerticalItem key={index} {...item} />
      ))}

      <div className="pagination mt-4">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TechVerticalList;
