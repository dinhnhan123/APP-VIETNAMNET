import HighlightItem from "./HighlightItem";
import "../../styles/car/highlight.css";

const HighlightSection = () => {
  const highlights = [
    {
      image: "https://i1-vnexpress.vnecdn.net/2023/08/05/WulingHongQuangMiniEVVnE0674jpg-1691198217.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=wligV0EXixfy40oRZzyuOA&t=image",
      category: "XE ĐIỆN",
      title: "Mẫu ô tô điện mới ra mắt tại Việt Nam, giá từ 600 triệu đồng",
      link: "/oto-xe-may/o-to-dien-moi"
    },
    {
      image: "src/assets/hybrid.png",
      category: "XE HYBRID",
      title: "Ô tô hybrid ngày càng được ưa chuộng nhờ tiết kiệm nhiên liệu",
      link: "/oto-xe-may/xe-hybrid"
    },
    {
      image: "src/assets/sedanC.jpg",
      category: "ĐÁNH GIÁ XE",
      title: "Trải nghiệm sedan hạng C mới: Nhiều nâng cấp đáng tiền",
      link: "/oto-xe-may/danh-gia-sedan"
    },
    {
      image: "src/assets/quyDinhXe.jpg",
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
