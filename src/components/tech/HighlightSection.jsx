import HighlightItem from "./HighlightItem";
import "../../styles/tech/highlight.css";

const HighlightSection = () => {
  const highlights = [
    {
      image: "https://vinuni.edu.vn/wp-content/uploads/2024/12/kham-pha-tri-tue-nhan-tao-ai-cong-nghe-thay-doi-the-gioi-nhu-the-nao.jpeg",
      category: "AI",
      title: "Trí tuệ nhân tạo đang thay đổi ngành công nghệ như thế nào?",
      link: "/cong-nghe/tri-tue-nhan-tao"
    },
    {
      image: "https://cdn-media.sforum.vn/storage/app/media/congminh/nvidia-dau-tu-5-ty-usd-vao-intel-lien-minh-chong-amd-5.jpg",
      category: "PHẦN CỨNG",
      title: "Cuộc đua chip AI: Nvidia, AMD và Intel cạnh tranh khốc liệt",
      link: "/cong-nghe/chip-ai"
    },
    {
      image: "src/assets/duLieu.jpg",
      category: "AN NINH MẠNG",
      title: "Gia tăng tấn công mạng nhắm vào người dùng cá nhân",
      link: "/cong-nghe/an-ninh-mang"
    },
    {
      image: "src/assets/ai2025.jpg",
      category: "THIẾT BỊ",
      title: "Xu hướng smartphone 2025: AI on-device lên ngôi",
      link: "/cong-nghe/smartphone-2025"
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
