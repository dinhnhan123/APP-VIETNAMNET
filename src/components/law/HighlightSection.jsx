import HighlightItem from "./HighlightItem";
import "../../styles/law/highlight.css";

const HighlightSection = () => {
  const highlights = [
    {
      image:"https://media.vneconomy.vn/images/upload/2024/06/17/img-4203.jpeg",
      category: "XÉT XỬ",
      title: "Xét xử vụ án kinh tế lớn, nhiều bị cáo đối mặt mức án nghiêm khắc",
      link: "/phap-luat/xet-xu-vu-an-kinh-te"
    },
    {
      image:"src/assets/dieuTra.jpg",
      category: "ĐIỀU TRA",
      title: "Công an khởi tố, điều tra vụ việc có dấu hiệu vi phạm hình sự",
      link: "/phap-luat/dieu-tra-vu-viec"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKOE11gTIZoWldomzk-8QQ_Qs9JuK41DAv2g&s",
      category: "CHÍNH SÁCH",
      title: "Nhiều quy định pháp luật mới chính thức có hiệu lực từ năm 2025",
      link: "/phap-luat/luat-moi-2025"
    },
    {
      image:
        "src/assets/luaDao.jpg",
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
