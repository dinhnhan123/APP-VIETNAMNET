import HighlightItem from "./HighlightItem";
import "../../styles/politics/highlight.css";

const HighlightSection = () => {
  const highlights = [
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/15/thu-tuong-pham-minh-chinh-du-hoi-nghi-cong-an-toan-quoc-lan-thu-81-2699.jpg?width=360&s=gU0isAL-U6CC94S_ddv36A",
      category: "SỰ KIỆN",
      title: "Thủ tướng Phạm Minh Chính dự Hội nghị Công an toàn quốc lần thứ 81",
      link: "/chinh-tri/thu-tuong-du-hoi-nghi"
    },
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/12/ban-bi-thu-tinh-gian-10-hoi-nghi-hang-nam-lanh-dao-ket-luan-khong-qua-50-phut-3012.jpg?width=360&s=VZ63G09kxEIipQjT0Yrs0A",
      category: "XÂY DỰNG ĐẢNG",
      title: "Ban Bí thư: Tinh giản 10% hội nghị hằng năm, lãnh đạo kết luận không quá 50 phút",
      link: "/chinh-tri/ban-bi-thu"
    },
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/16/nguoi-dan-chau-phi-nhay-mua-vay-co-viet-nam-cung-chien-si-mu-noi-xanh-1277.jpg?width=360&s=M0GCaPlPrvkqnGx0VXmlSw",
      category: "ĐỐI NGOẠI",
      title: "Người dân châu Phi nhảy múa, vẫy cờ Việt Nam cùng chiến sĩ mũ nồi xanh",
      link: "/doi-ngoai/chau-phi"
    },
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/14/giam-hoi-hop-lanh-dao-ket-luan-khong-qua-50-phut-het-tinh-trang-moi-viec-deu-cho-hop-4530.jpg?width=360&s=hAw-M6KWQwAd4kHPNNNY5Q",
      category: "BÀN LUẬN",
      title: "Giảm họp, lãnh đạo kết luận không quá 50 phút: Hết tình trạng mọi việc đều 'chờ họp'",
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
