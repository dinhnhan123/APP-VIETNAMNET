import { useState } from "react";
import HealthVerticalItem from "./HealthVerticalItem";
import "../../styles/health/healthVerticalList.css";

const HealthVerticalList = () => {
  const articles = [
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/15/bo-truong-dao-ngoc-dung-truong-du-bi-dai-hoc-la-mo-hinh-giao-duc-dac-thu-161.jpg?width=360&s=8frNVXqWL_eeqvynDCjZCg",
      category: "SỨC KHỎE",
      title: "Bộ Y tế cảnh báo nguy cơ gia tăng bệnh hô hấp khi thời tiết chuyển lạnh",
      desc: "Các chuyên gia y tế khuyến cáo người dân cần giữ ấm cơ thể, tăng cường dinh dưỡng và tiêm phòng đầy đủ để phòng tránh các bệnh hô hấp mùa đông.",
      link: "/suc-khoe/benh-ho-hap-mua-dong"
    },
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/14/bai-hoc-tu-chau-au-co-the-giup-viet-nam-giam-gan-80-muc-o-nhiem-khong-khi-430.jpg?width=360&s=Am3rAKrcxBNz7B1sh9Leww",
      category: "DINH DƯỠNG",
      title: "Chế độ ăn lành mạnh giúp giảm nguy cơ bệnh tim mạch",
      desc: "Việc bổ sung rau xanh, trái cây và hạn chế chất béo xấu được chứng minh giúp giảm nguy cơ mắc các bệnh tim mạch.",
      link: "/suc-khoe/dinh-duong-tim-mach"
    },
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/14/dau-an-10-nam-cua-mot-hiep-hoi-va-su-ra-doi-trung-tam-phat-trien-nhan-luc-so-viet-nam-1956.jpg?width=360&s=IjkuVpmZrLwyX_OYphtGBg",
      category: "TÂM LÝ",
      title: "Dấu hiệu stress kéo dài và cách cân bằng tinh thần",
      desc: "Stress kéo dài có thể ảnh hưởng nghiêm trọng đến sức khỏe tinh thần và thể chất nếu không được can thiệp kịp thời.",
      link: "/suc-khoe/stress-va-tam-ly"
    },
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/13/can-bo-yeu-cau-dan-nop-them-giay-to-da-co-du-lieu-se-bi-xu-ly-trach-nhiem-863.jpeg?width=360&s=S3IHOf1KlQf9KbN_yK1n3Q",
      category: "Y TẾ",
      title: "Người dân cần lưu ý khi đi khám chữa bệnh bảo hiểm y tế",
      desc: "Bộ Y tế khuyến cáo người dân mang đầy đủ giấy tờ và tìm hiểu kỹ quy trình khám chữa bệnh để tránh mất thời gian.",
      link: "/suc-khoe/bao-hiem-y-te"
    }
    // 👉 Có thể thêm bao nhiêu bài cũng được
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
    <div className="health-vertical-list">

      {/* LIST */}
      {currentArticles.map((item, index) => (
        <HealthVerticalItem key={index} {...item} />
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

export default HealthVerticalList;
