import { useState } from "react";
import LawVerticalItem from "./LawVerticalItem";
import "../../styles/law/lawVerticalList.css";

const LawVerticalList = () => {
  const articles = [
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/15/phien-toa-xet-xu-vu-an-kinh-te-001.jpg?width=360",
      category: "XÉT XỬ",
      title: "Xét xử vụ án kinh tế lớn, nhiều bị cáo đối mặt mức án nghiêm khắc",
      desc: "Tòa án nhân dân mở phiên xét xử sơ thẩm vụ án kinh tế nghiêm trọng, thu hút sự quan tâm lớn của dư luận.",
      link: "/phap-luat/xet-xu-vu-an-kinh-te"
    },
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/14/cong-an-dieu-tra-vu-an-hinh-su-002.jpg?width=360",
      category: "ĐIỀU TRA",
      title: "Công an mở rộng điều tra vụ việc có dấu hiệu vi phạm hình sự",
      desc: "Cơ quan điều tra đang làm rõ vai trò của các cá nhân liên quan để xử lý theo quy định pháp luật.",
      link: "/phap-luat/dieu-tra-vu-viec"
    },
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/14/luat-moi-co-hieu-luc-003.jpg?width=360",
      category: "CHÍNH SÁCH",
      title: "Nhiều quy định pháp luật mới chính thức có hiệu lực từ năm 2025",
      desc: "Các luật và nghị định mới tác động trực tiếp đến đời sống người dân và hoạt động doanh nghiệp.",
      link: "/phap-luat/luat-moi-2025"
    },
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/13/canh-bao-lua-dao-cong-nghe-cao-004.jpg?width=360",
      category: "CẢNH BÁO",
      title: "Gia tăng các vụ lừa đảo công nghệ cao, người dân cần cảnh giác",
      desc: "Nhiều thủ đoạn lừa đảo mới xuất hiện, lợi dụng công nghệ và mạng xã hội để chiếm đoạt tài sản.",
      link: "/phap-luat/lua-dao-cong-nghe-cao"
    },
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/12/thu-hoi-tai-san-vu-an-tham-nhung-005.jpg?width=360",
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
