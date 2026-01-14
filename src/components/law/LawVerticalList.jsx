import { useState } from "react";
import LawVerticalItem from "./LawVerticalItem";
import "../../styles/law/lawVerticalList.css";

const LawVerticalList = () => {
  const articles = [
    {
      image: "https://media.vneconomy.vn/images/upload/2024/06/17/img-4203.jpeg",
      category: "XÉT XỬ",
      title: "Xét xử vụ án kinh tế lớn, nhiều bị cáo đối mặt mức án nghiêm khắc",
      desc: "Tòa án nhân dân mở phiên xét xử sơ thẩm vụ án kinh tế nghiêm trọng, thu hút sự quan tâm lớn của dư luận.",
      link: "/phap-luat/xet-xu-vu-an-kinh-te"
    },
    {
      image: "https://dms.gov.vn/documents/53553/0/z5936937427743_3b3e46079536c9558359f5cce86e5f43.jpg/c4c7e816-17dd-421a-bbf2-340dbe0882d4",
      category: "ĐIỀU TRA",
      title: "Công an mở rộng điều tra vụ việc có dấu hiệu vi phạm hình sự",
      desc: "Cơ quan điều tra đang làm rõ vai trò của các cá nhân liên quan để xử lý theo quy định pháp luật.",
      link: "/phap-luat/dieu-tra-vu-viec"
    },
    {
      image: "https://uongbi.gov.vn/ckfinder/userfiles/images/2025/10/9/images0.jpg",
      category: "CHÍNH SÁCH",
      title: "Nhiều quy định pháp luật mới chính thức có hiệu lực từ năm 2025",
      desc: "Các luật và nghị định mới tác động trực tiếp đến đời sống người dân và hoạt động doanh nghiệp.",
      link: "/phap-luat/luat-moi-2025"
    },
    {
      image: "https://bcp.cdnchinhphu.vn/334894974524682240/2025/4/4/81-17436997367231506998503.jpg",
      category: "CẢNH BÁO",
      title: "Gia tăng các vụ lừa đảo công nghệ cao, người dân cần cảnh giác",
      desc: "Nhiều thủ đoạn lừa đảo mới xuất hiện, lợi dụng công nghệ và mạng xã hội để chiếm đoạt tài sản.",
      link: "/phap-luat/lua-dao-cong-nghe-cao"
    },
    {
      image: "https://media.thanhtra.com.vn/public/data/images/0/2023/07/16/thaihai/thu-hoi-tai-san-tham-nhung.jpg?w=1319",
      category: "THAM NHŨNG",
      title: "Thu hồi tài sản trong các vụ án tham nhũng đạt kết quả tích cực",
      desc: "Công tác thu hồi tài sản bị chiếm đoạt trong các vụ án tham nhũng tiếp tục được đẩy mạnh.",
      link: "/phap-luat/thu-hoi-tai-san-tham-nhung"
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
    <div className="law-vertical-list">
      {/* LIST */}
      {currentArticles.map((item, index) => (
        <LawVerticalItem key={index} {...item} />
      ))}

      {/* PAGINATION */}
      <div className="pagination mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
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
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default LawVerticalList;
