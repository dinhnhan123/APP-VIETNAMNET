import HighlightItem from "./HighlightItem";
import "../../styles/ethnicityReligion/highlight.css";

const HighlightSection = () => {
  const highlights = [
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/27/ghe-nong-ngan-hang-hinh-anh-moi-cua-bau-thuy-ba-nguyen-thanh-phuong-rut-khoi-hdqt-918.jpg?width=360&s=13GGKj1FRAvAl0n5FAoQEg",
      category: "TÀI CHÍNH",
      title: "‘Ghế nóng’ ngân hàng: Hình ảnh mới của 'bầu Thuỵ', bà Nguyễn Thanh Phượng rút khỏi HĐQT",
      link: "/chinh-tri/thu-tuong-du-hoi-nghi"
    },
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/27/hang-khong-1-923.jpg?width=360&s=9LxR7G9lSJ2nj8DaclLQOQ",
      category: "ĐẦU TƯ",
      title: "Vượt đỉnh trước dịch, hàng không Việt Nam tạo đà ‘cất cánh’",
      link: "/chinh-tri/ban-bi-thu"
    },
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/27/vuot-nhieu-chong-gai-the-manh-viet-bang-bang-len-dinh-lich-su-248.png?width=360&s=Y924I9gxk1zf-W5bjlwYAA",
      category: "THỊ TRƯỜNG",
      title: "Vượt nhiều ‘chông gai’, thế mạnh Việt băng băng lên đỉnh lịch sử",
      link: "/doi-ngoai/chau-phi"
    },
    {
      image: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/20/nghi-bi-lua-dao-chu-dong-nhap-sai-mat-khau-5-lan-de-khoa-quyen-truy-cap-1196.jpg?width=360&s=KhOkVlpawIArC6ykDlm-DA",
      category: "TƯ VẤN TÀI CHÍNH",
      title: "Nghi bị lừa đảo, chủ động nhập sai mật khẩu 5 lần để khoá quyền truy cập",
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
