import HighlightItem from "./HighlightItem";
import "../../styles/law/highlight.css";

const HighlightSection = () => {
  const highlights = [
    {
      image:
        "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/15/phien-toa-xet-xu-vi-pham-phap-luat-001.jpg?width=360&s=law1",
      category: "XÉT XỬ",
      title: "Xét xử vụ án kinh tế lớn, nhiều bị cáo đối mặt mức án nghiêm khắc",
      link: "/phap-luat/xet-xu-vu-an-kinh-te"
    },
    {
      image:
        "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/12/cong-an-dieu-tra-vu-an-hinh-su-002.jpg?width=360&s=law2",
      category: "ĐIỀU TRA",
      title: "Công an khởi tố, điều tra vụ việc có dấu hiệu vi phạm hình sự",
      link: "/phap-luat/dieu-tra-vu-viec"
    },
    {
      image:
        "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/16/luat-moi-co-hieu-luc-003.jpg?width=360&s=law3",
      category: "CHÍNH SÁCH",
      title: "Nhiều quy định pháp luật mới chính thức có hiệu lực từ năm 2025",
      link: "/phap-luat/luat-moi-2025"
    },
    {
      image:
        "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/14/canh-bao-vi-pham-phap-luat-004.jpg?width=360&s=law4",
      category: "CẢNH BÁO",
      title: "Gia tăng các vụ lừa đảo công nghệ cao, người dân cần cảnh giác",
      link: "/phap-luat/canh-bao-lua-dao"
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
