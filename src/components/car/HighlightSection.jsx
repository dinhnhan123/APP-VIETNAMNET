import HighlightItem from "./HighlightItem";
import "../../styles/car/highlight.css";

const HighlightSection = () => {
  const highlights = [
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/15/o-to-dien-moi-ra-mat-viet-nam-2699.jpg?width=360",
      category: "XE ĐIỆN",
      title: "Mẫu ô tô điện mới ra mắt tại Việt Nam, giá từ 600 triệu đồng",
      link: "/oto-xe-may/o-to-dien-moi"
    },
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/14/oto-hybrid-tiet-kiem-nhien-lieu-3012.jpg?width=360",
      category: "XE HYBRID",
      title: "Ô tô hybrid ngày càng được ưa chuộng nhờ tiết kiệm nhiên liệu",
      link: "/oto-xe-may/xe-hybrid"
    },
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/16/danh-gia-xe-sedan-moi-1277.jpg?width=360",
      category: "ĐÁNH GIÁ XE",
      title: "Trải nghiệm sedan hạng C mới: Nhiều nâng cấp đáng tiền",
      link: "/oto-xe-may/danh-gia-sedan"
    },
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/14/luat-giao-thong-oto-moi-4530.jpg?width=360",
      category: "CHÍNH SÁCH",
      title: "Những quy định mới người lái ô tô cần biết từ năm 2025",
      link: "/oto-xe-may/luat-giao-thong"
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
