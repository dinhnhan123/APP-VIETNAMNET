import HighlightItem from "./HighlightItem";
import "../../styles/tech/highlight.css";

const HighlightSection = () => {
  const highlights = [
    {
      image:
        "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/15/ai-thay-doi-doanh-nghiep-toan-cau-1234.jpg?width=360",
      category: "AI",
      title: "AI đang thay đổi cách doanh nghiệp toàn cầu vận hành",
      link: "/cong-nghe/ai-doanh-nghiep"
    },
    {
      image:
        "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/14/viet-nam-lam-chu-cong-nghe-ban-dan-5678.jpg?width=360",
      category: "CÔNG NGHỆ SỐ",
      title: "Việt Nam tiến gần hơn mục tiêu làm chủ công nghệ bán dẫn",
      link: "/cong-nghe/ban-dan-viet-nam"
    },
    {
      image:
        "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/16/startup-cong-nghe-viet-nam-goi-von-9101.jpg?width=360",
      category: "STARTUP",
      title: "Startup công nghệ Việt gọi vốn triệu USD cuối năm",
      link: "/cong-nghe/startup-goi-von"
    },
    {
      image:
        "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/13/an-ninh-mang-tan-cong-gia-tang-1121.jpg?width=360",
      category: "AN NINH MẠNG",
      title: "Cảnh báo làn sóng tấn công mạng nhắm vào doanh nghiệp Việt",
      link: "/cong-nghe/an-ninh-mang"
    }
  ];

  return (
    <section className="highlight-section">
      <h3 className="highlight-title">ĐÁNG CHÚ Ý</h3>

      <div className="row g-3">
        {highlights.map((item, index) => (
          <div className="col-12 col-sm-6 col-md-3 col-lg" key={index}>
            <HighlightItem {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightSection;
