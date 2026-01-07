import HighlightItem from "./HighlightItem";
import "../../styles/health/highlight.css";

const HighlightSection = () => {
  const highlights = [
    {
      image: "https://static-images.vnncdn.net/files/publish/2023/8/1/an-uong-lanh-manh-1234.jpg",
      category: "DINH DƯỠNG",
      title: "Ăn uống lành mạnh giúp giảm nguy cơ bệnh tim mạch",
      link: "/suc-khoe/dinh-duong-lanh-manh"
    },
    {
      image: "https://static-images.vnncdn.net/files/publish/2023/9/2/kham-suc-khoe-dinh-ky-2163.jpg",
      category: "Y TẾ",
      title: "Khám sức khỏe định kỳ: Phát hiện sớm bệnh nguy hiểm",
      link: "/suc-khoe/kham-suc-khoe"
    },
    {
      image: "https://static-images.vnncdn.net/files/publish/2023/7/20/tap-the-duc-moi-ngay-8899.jpg",
      category: "ĐỜI SỐNG",
      title: "Tập thể dục 30 phút mỗi ngày mang lại lợi ích gì?",
      link: "/suc-khoe/tap-the-duc"
    },
    {
      image: "https://static-images.vnncdn.net/files/publish/2023/6/15/suc-khoe-tinh-than-4455.jpg",
      category: "TINH THẦN",
      title: "Chăm sóc sức khỏe tinh thần trong cuộc sống hiện đại",
      link: "/suc-khoe/suc-khoe-tinh-than"
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
