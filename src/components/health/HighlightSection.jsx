import HighlightItem from "./HighlightItem";
import "../../styles/health/highlight.css";

const HighlightSection = () => {
  const highlights = [
    {
      image: "https://azado.com.vn/wp-content/uploads/2023/08/66-1.png",
      category: "DINH DƯỠNG",
      title: "Ăn uống lành mạnh giúp giảm nguy cơ bệnh tim mạch",
      link: "/suc-khoe/dinh-duong-lanh-manh"
    },
    {
      image: "https://cdn.24h.com.vn/upload/4-2025/images/2025-11-05/image3-1762306398-348-width2500height1667.jpg",
      category: "Y TẾ",
      title: "Khám sức khỏe định kỳ: Phát hiện sớm bệnh nguy hiểm",
      link: "/suc-khoe/kham-suc-khoe"
    },
    {
      image: "https://lh4.googleusercontent.com/ZLECSSbVDoomfwy3MgtGMCDn3_uGZWgXICKAAFwxxEGpJPPw8KBpKzS3lOYxo1uWO5XZfSSfKYUQrfl4jrXXWzfVhWFfhf_w1SK9s55vdExh2pKZC58xLrC319TykILmbeyo3pjSi17fsX34uDMliqXDTzpdfH913MRw4_CetWai1rJJto1eTQLcjRcINg",
      category: "ĐỜI SỐNG",
      title: "Tập thể dục 30 phút mỗi ngày mang lại lợi ích gì?",
      link: "/suc-khoe/tap-the-duc"
    },
    {
      image: "https://www.vinmec.com/static/uploads/20210918_004650_322487_cham_soc_suc_khoe_t_max_1800x1800_jpg_1e72373b52.jpg",
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
