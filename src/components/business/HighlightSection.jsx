import HighlightItem from "./HighlightItem";
import "../../styles/news/highlight.css";

const HighlightSection = () => {
  const highlights = [
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/25/2025-ha-noi-troi-ret-mien-bac-thap-nhat-duoi-8-do-3169.jpg?width=360&s=lOLsTPIwxYNJtfgg7SZAIQ",
      category: "DÂN SINH",
      title: "Dự báo thời tiết 27/12/2025: Hà Nội rét khô, chênh lệch ngày đêm gần 10 độ",
      link: "/chinh-tri/thu-tuong-du-hoi-nghi"
    },
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/lan-duong-danh-rieng-cho-xe-dap-dau-tien-tai-tphcm-lo-dien-sau-2-thang-thi-cong-2428.jpg?width=360&s=DzwOoV4r5IFd2wf100Bn3g",
      category: "GIAO THÔNG",
      title: "Làn đường dành riêng cho xe đạp đầu tiên tại TPHCM lộ diện sau 2 tháng thi công",
      link: "/chinh-tri/ban-bi-thu"
    },
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/27/lao-cai-xe-khach-lat-ngua-duoi-chan-doc-5-nguoi-tu-vong-452.jpg?width=360&s=8un9fUAAO4KxCE5U3YhjMw",
      category: "TIN NÓNG",
      title: "Lào Cai: Xe khách lật ngửa dưới chân dốc, 8 người tử vong",
      link: "/doi-ngoai/chau-phi"
    },
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/nhung-cau-noi-quen-thuoc-tu-cuoc-goi-so-la-nghe-la-biet-lua-dao-3366.png?width=360&s=eIL9bvlS4FIpbIb_FrF-6g",
      category: "DÂN SINH",
      title: "Những câu nói quen thuộc từ cuộc gọi số lạ: Nghe là biết lừa đảo",
      link: "/ban-luan/giam-hop"
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
